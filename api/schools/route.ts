import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const schools = await prisma.school.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        addedBy: true,
        dorms: true,
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

    const addSchool = await prisma.school.create({
      data: {
        name,
        shortName,
        city,
        state,
        schoolType,
        dormsNearby,
        website,
        picture,
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
