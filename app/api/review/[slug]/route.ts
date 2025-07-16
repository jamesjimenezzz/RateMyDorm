import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;

  try {
    const reviews = await prisma.review.findMany({
      where: {
        dormSlug: slug,
      },
      include: {
        dorm: true,
      },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching reviews",
      },
      { status: 500 }
    );
  }
}
