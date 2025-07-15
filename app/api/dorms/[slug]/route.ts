import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { NEVER } from "zod";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;
  try {
    const dorm = await prisma.dorm.findMany({
      where: {
        schoolSlug: slug,
      },
    });

    return NextResponse.json(dorm);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch dorms" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const body = await req.json();

  const {
    dormName,
    roomType,
    yearLived,
    semester,
    photos,
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
    userName,
    classYear,
  } = body;

  console.log(body);

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

  const { slug } = await params;

  const dormSlug = dormName.toLowerCase().replace(/ /g, "-");

  try {
    const [dorm, review] = await prisma.$transaction([
      prisma.dorm.create({
        data: {
          name: dormName,
          schoolSlug: slug,
          slug: dormSlug,
          addedById: checkUser.id,
        },
      }),

      prisma.review.create({
        data: {
          roomType,
          yearLived,
          photoUrl: photos,
          semester,
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
          dormSlug: dormSlug,
          userId: checkUser.id,
        },
      }),
    ]);
    return NextResponse.json({ dorm, review });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create dorm and review" },
      { status: 500 }
    );
  }
}
