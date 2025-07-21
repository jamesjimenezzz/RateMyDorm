import prisma from "@/lib/prisma";

export const HomePageRateDorms = async () => {
  try {
    const dorms = await prisma.dorm.findMany({
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

    const dormWithReviews = dorms.map((dorm) => {
      const reviewRates = dorm.reviews.reduce(
        (acc, review) => acc + review.overallRate,
        0
      );
      const average = reviewRates / dorm.reviews.length;
      return {
        ...dorm,
        average,
      };
    });

    const sortedDorms = dormWithReviews
      .sort((a, b) => b.average - a.average)
      .slice(0, 10);

    return sortedDorms;
  } catch {
    return [];
  }
};
