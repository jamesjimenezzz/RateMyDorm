import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "0");
  const rating = searchParams.get("rating") || undefined;
  const limit = parseInt(searchParams.get("limit") || "8");
  const skip = (page - 1) * limit;

  try {
    const reviews = await prisma.review.findMany({
      where: {
        dormSlug: slug,
        ...(rating ? { overallRate: Number(rating) } : {}),
        status: "approved",
      },
      include: {
        dorm: true,
        user: true,
      },
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      reviews,
      hasMore: reviews.length === limit,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Error fetching reviews",
      },
      { status: 500 }
    );
  }
}
