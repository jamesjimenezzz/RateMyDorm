import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const dorm = await prisma.dorm.findUnique({
      where: {
        slug: slug,
      },
      include: {
        school: true,
        reviews: true,
      },
    });

    return NextResponse.json(dorm);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
