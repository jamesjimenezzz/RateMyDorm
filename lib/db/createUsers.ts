import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import edulist from "@/edulist.json";

export async function createUser() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
    return null;
  }

  const clerkId = user.id;

  const filterPH = edulist
    .filter((item) => item.country === "Philippines")
    .flatMap((item) => item.domains);

  const email = user.emailAddresses[0].emailAddress;

  const domain = email.split("@")[1];

  const isStudentEmail = filterPH.some((item) => domain === item);

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
      isStudentEmail: isStudentEmail,
    },
  });

  return createUser;
}
