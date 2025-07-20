import prisma from "@/lib/prisma";

export async function fetchDorm(slug: string) {
  try {
    const dorm = await prisma.dorm.findUnique({
      where: {
        slug: slug,
        status: "approved",
      },
      include: {
        school: true,
        reviews: {
          where: {
            status: "approved",
          },
        },
      },
    });

    return dorm;
  } catch {
    return null;
  }
}
