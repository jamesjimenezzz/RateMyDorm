import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const schoolName = searchParams.get("school");

  if (!schoolName) {
    return NextResponse.json({ message: "School name is required" });
  }

  try {
    const exist = await prisma.school.findFirst({
      where: {
        name: {
          equals: schoolName,
          mode: "insensitive",
        },
      },
    });

    if (!exist) {
      return NextResponse.json({ exist: false });
    }

    return NextResponse.json({ exist: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
