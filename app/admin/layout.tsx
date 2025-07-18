import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await prisma?.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!user || user.role !== "admin") {
    redirect("/");
  }

  return <>{children}</>;
};

export default AdminLayout;
