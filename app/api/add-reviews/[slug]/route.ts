import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;

  try {
    const selectedDorm = await prisma.dorm.findUnique({
      where: {
        slug: slug,
      },
    });

    return NextResponse.json(selectedDorm, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch dorm" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;
  const {
    cleanliness,
    noiseLevel,
    location,
    amenities,
    reviewTitle,
    detailedReview,
    likeMost,
    improve,
    recommendDorm,
    isAnonymous,
    classYear,
    userName,
  } = await req.json();

  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const addReview = await prisma.review.create({
      data: {
        cleanlinessRate: cleanliness,
        noiseLevelRate: noiseLevel,
        locationRate: location,
        amenitiesRate: amenities,
        reviewTitle,
        reviewDescription: detailedReview,
        likeMost,
        improve,
        recommendation: recommendDorm,
        isAnonymous,
        classYear,
        userName: userName,
        dormSlug: slug,
        userId: userId,
      },
    });
  } catch (error) {}
}
