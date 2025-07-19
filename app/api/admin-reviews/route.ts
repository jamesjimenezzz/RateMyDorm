import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const reviews = await prisma?.review.findMany({
      where: {
        status: "pending",
      },
    });

    if (!reviews) {
      throw new Error("Failed to fetch reviews.");
    }

    return NextResponse.json(reviews);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to fetch reviews." });
  }
}
