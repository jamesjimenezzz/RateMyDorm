import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const update = await prisma.school.update({
      where: {
        id: id,
      },
      data: {
        status: "approved",
      },
    });

    if (!update) {
      return NextResponse.json({ message: "Failed to update" });
    }

    return NextResponse.json(update);
  } catch (error) {
    return NextResponse.json({ message: "Failed to update" });
  }
}
