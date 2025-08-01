import prisma from "@/lib/prisma";

export async function fetchReviews(slug: string) {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        dormSlug: slug,
        status: "approved",
      },
    });

    return reviews;
  } catch {
    return null;
  }
}
