import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function createUser() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
    return null;
  }

  const clerkId = user.id;

  const createUser = await prisma.user.upsert({
    where: {
      clerkId: clerkId,
    },
    update: {},
    create: {
      clerkId: clerkId,
      name: user.fullName || "",
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
    },
  });

  return createUser;
}
