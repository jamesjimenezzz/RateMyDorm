import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const schoolSlug = searchParams.get("slug");
  } catch (error) {}
}
