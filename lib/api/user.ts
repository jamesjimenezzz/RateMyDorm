import { cache } from "react";
import prisma from "../prisma";
import { auth } from "@clerk/nextjs/server";

export const getUser = cache(async () => {
  const { userId } = await auth();

  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId || "",
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
});
