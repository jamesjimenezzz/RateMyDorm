import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(schoolId: string) {
  try {
    const dorms = await prisma?.dorm.findMany({
      where: {
        schoolId: schoolId,
      },
    });
    return NextResponse.json(dorms);
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching dorms",
    });
  }
}

export async function POST(req: Request) {
  const { body } = await req.json();

  const {
    name,
    schoolSlug,
    roomType,
    yearLived,
    semester,
    photoUrl,
    cleanlinessRate,
    noiseLevelRate,
    locationRate,
    amenitiesRate,
    reviewTitle,
    reviewDescription,
    likeMost,
    improve,
    recommendation,
    isAnonymous,
    userName,
    classYear,
  } = body;

  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({
      message: "Unauthorized",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  if (!user) {
    return NextResponse.json({
      message: "Unauthorized user",
    });
  }

  const dorm = await prisma.dorm.create({
    data: {
      name: body,
    },
  });
}
