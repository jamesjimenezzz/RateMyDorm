import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "0");
  const rating = searchParams.get("rating") || undefined;
  const limit = parseInt(searchParams.get("limit") || "5");
  const skip = page * limit;

  try {
    const reviews = await prisma.review.findMany({
      where: {
        dormSlug: slug,
        ...(rating ? { overallRate: Number(rating) } : {}),
      },
      include: {
        dorm: true,
      },
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
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
