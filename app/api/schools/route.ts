import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const schools = await prisma.school.findMany({
      where: {
        status: "approved",
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(schools);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error fetching schools",
    });
  }
}

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({
      message: "Unauthorized",
    });
  }

  try {
    const body = await req.json();

    const {
      name,
      shortName,
      city,
      state,
      schoolType,
      dormsNearby,
      website,
      picture,
    } = body;

    const slug = name.toLowerCase().replace(/ /g, "-");

    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) {
      return NextResponse.json({
        message: "User not found",
      });
    }

    const addSchool = await prisma.school.create({
      data: {
        name,
        shortName,
        slug,
        city,
        state,
        schoolType,
        dormsNearby,
        website,
        picture,
        addedById: user.id,
      },
    });

    return NextResponse.json(addSchool);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error adding school",
    });
  }
}
