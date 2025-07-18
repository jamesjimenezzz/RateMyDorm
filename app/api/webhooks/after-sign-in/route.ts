import { NextResponse } from "next/server";
import edulist from "@/edulist.json";
import prisma from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const clerkId = body.data?.object?.id;

    if (!clerkId) {
      return NextResponse.json({ error: "Missing Clerk ID" }, { status: 400 });
    }

    const filterPH = edulist
      .filter((item) => item.country === "Philippines")
      .flatMap((item) => item.domains);

    const clerk = await clerkClient();
    const user = await clerk.users.getUser(clerkId);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

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

    return NextResponse.json({ message: "User created" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
