import prisma from "@/lib/prisma";

export async function fetchDorm(slug: string) {
  try {
    const dorm = await prisma.dorm.findUnique({
      where: {
        slug: slug,
      },
      include: {
        school: true,
        reviews: true,
      },
    });

    return dorm;
  } catch (error) {
    return null;
  }
}
