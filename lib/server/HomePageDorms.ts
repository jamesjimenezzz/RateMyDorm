import prisma from "@/lib/prisma";

export async function HomePageDorms() {
  try {
    const dorms = await prisma?.dorm.findMany({
      where: {
        status: "approved",
      },
      include: {
        reviews: {
          where: {
            status: "approved",
          },
        },
        school: true,
      },
    });

    const sortDormsWithReviews = dorms.map((dorm) => {
      const reviewsLength = dorm.reviews.length;

      return {
        ...dorm,
        reviewsLength,
      };
    });

    const sortedDorms = sortDormsWithReviews
      .sort((a, b) => b.reviewsLength - a.reviewsLength)
      .slice(0, 10);

    return sortedDorms;
  } catch {
    return [];
  }
}
