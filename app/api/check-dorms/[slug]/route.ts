import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { searchParams } = new URL(req.url);

  const dormNameCheck = searchParams.get("dormName");

  if (!dormNameCheck) {
    return NextResponse.json({ message: "Dorm name is required" });
  }

  try {
    const exist = await prisma.dorm.findFirst({
      where: {
        schoolSlug: slug,
        name: {
          equals: dormNameCheck,
          mode: "insensitive",
        },
      },
    });

    if (!exist) {
      return NextResponse.json({ exist: false });
    }

    return NextResponse.json({ exist: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
