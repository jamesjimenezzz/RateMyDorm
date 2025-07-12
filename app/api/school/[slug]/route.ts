import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;

  try {
    const school = await prisma?.school.findUnique({
      where: {
        slug: slug,
      },
      include: {
        dorms: true,
      },
    });

    return NextResponse.json(school);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching school",
      },
      { status: 500 }
    );
  }
}
