import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dorms = await prisma.dorm.findMany({
      where: {
        status: "pending",
      },
      include: {
        school: true,
      },
    });

    if (!dorms) {
      throw new Error("Failed to fetch dorms.");
    }

    return NextResponse.json(dorms);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to fetch dorms." });
  }
}
