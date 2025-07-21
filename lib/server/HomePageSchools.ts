import prisma from "@/lib/prisma";
export async function HomePageSchools() {
  try {
    const schools = await prisma.school.findMany({
      where: {
        status: "approved",
      },
      include: {
        dorms: {
          where: {
            status: "approved",
          },
          include: {
            reviews: {
              where: {
                status: "approved",
              },
            },
          },
        },
      },
    });

    const schoolsWithReviewCount = schools.map((school) => {
      const dormReviewsCount = school.dorms.reduce((acc, dorm) => {
        return acc + dorm.reviews.length;
      }, 0);

      return {
        ...school,
        dormReviewsCount,
      };
    });

    const topSchools = schoolsWithReviewCount
      .sort((a, b) => b.dormReviewsCount - a.dormReviewsCount)
      .slice(0, 6);

    return topSchools;
  } catch {
    return null;
  }
}
