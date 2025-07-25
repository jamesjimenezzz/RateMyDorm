import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const selectedDorm = await prisma.dorm.findUnique({
      where: {
        slug: slug,
      },
    });

    return NextResponse.json(selectedDorm, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch dorm" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const body = await req.json();

  const {
    roomType,
    yearLived,
    photos,
    semester,
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
  } = body;

  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const checkUser = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!checkUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const overallRate = Math.round(
    (cleanliness + noiseLevel + location + amenities) / 4
  );

  try {
    const addReview = await prisma.review.create({
      data: {
        roomType,
        yearLived,
        photoUrl: photos,
        semester,
        cleanlinessRate: cleanliness,
        noiseLevelRate: noiseLevel,
        locationRate: location,
        amenitiesRate: amenities,
        overallRate: overallRate,
        reviewTitle,
        reviewDescription: detailedReview,
        likeMost,
        improve,
        recommendation: recommendDorm,
        isAnonymous,
        classYear,
        userName: userName,
        dormSlug: slug,
        userId: checkUser.id,
      },
    });

    return NextResponse.json({ addReview });
  } catch {
    return NextResponse.json(
      { error: "Failed to add review" },
      { status: 500 }
    );
  }
}
