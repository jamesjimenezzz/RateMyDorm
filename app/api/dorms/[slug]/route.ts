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

  try {
    console.log("📦 Incoming body:", body);
    console.log("👤 Authenticated userId:", userId);
    console.log("✅ checkUser.id:", checkUser?.id);

    const dorm = await prisma.dorm.create({
      data: {
        name: dormName,
        roomType,
        yearLived,
        semester,
        photoUrl: photos,
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
        userName,
        classYear,
        schoolSlug: slug,
        addedById: checkUser.id,
      },
    });

    return NextResponse.json(dorm);
  } catch (error) {
    console.error("❌ Error creating dorm:", error);
    return NextResponse.json(
      { error: "Failed to create dorm", details: error },
      { status: 500 }
    );
  }
}
