import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const schools = await prisma?.school.findMany({
      where: {
        status: "pending",
      },
    });

    if (!schools) {
      throw new Error("Failed to fetch pending schools");
    }

    return NextResponse.json(schools);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to fetch" });
  }
}
