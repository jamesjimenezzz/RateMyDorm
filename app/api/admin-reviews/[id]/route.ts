import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const review = await prisma.review.update({
      where: {
        id: id,
      },
      data: {
        status: "approved",
      },
    });

    if (!review) {
      return NextResponse.json(
        { message: "Review not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Review approved" }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Error approving review" },
      { status: 500 }
    );
  }
}
