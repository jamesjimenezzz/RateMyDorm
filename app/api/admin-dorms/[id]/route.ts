import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const dorm = await prisma?.dorm.update({
      where: {
        id: id,
      },
      data: {
        status: "approved",
      },
    });

    return NextResponse.json(dorm);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to approve dorm" });
  }
}
