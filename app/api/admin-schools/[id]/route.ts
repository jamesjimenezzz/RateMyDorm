import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const school = await prisma.school.findUnique({
    where: {
      id: id,
    },
  });

  if (!school) {
    return NextResponse.json({ message: "School not found" });
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that writes descriptions for schools.",
      },
      {
        role: "user",
        content: `Write a description for the school ${school.name} make it very short and concise.`,
      },
    ],
  });

  const aiDescription = completion.choices[0].message.content;

  try {
    const update = await prisma.school.update({
      where: {
        id: id,
      },
      data: {
        status: "approved",
        description: aiDescription,
      },
    });

    if (!update) {
      return NextResponse.json({ message: "Failed to update" });
    }

    return NextResponse.json(update);
  } catch {
    return NextResponse.json({ message: "Failed to update" });
  }
}
