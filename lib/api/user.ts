import prisma from "@/lib/prisma";

export async function getUser(clerkId: string) {
  try {
    const user = await prisma?.user.findUnique({
      where: {
        clerkId: clerkId,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
