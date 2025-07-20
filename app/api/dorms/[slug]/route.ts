import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 12;
  const skip = (page - 1) * limit;

  const totalDorms = await prisma.dorm.count({
    where: {
      schoolSlug: slug,
      status: "approved",
    },
  });

  const haveMore = totalDorms === limit;

  try {
    const dorms = await prisma.dorm.findMany({
      where: {
        schoolSlug: slug,
        status: "approved",
      },
      skip,
      take: limit,
      include: {
        reviews: {
          where: {
            status: "approved",
          },
        },
      },
    });

    return NextResponse.json({ dorms, haveMore });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch dorms" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
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

  const overallRate = Math.round(
    (cleanliness + noiseLevel + location + amenities) / 4
  );

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
          overallRate: overallRate,
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
