import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const school = await prisma?.school.findUnique({
      where: {
        slug: slug,
        status: "approved",
      },
    });

    return NextResponse.json(school);
  } catch {
    return NextResponse.json(
      {
        message: "Error fetching school",
      },
      { status: 500 }
    );
  }
}
