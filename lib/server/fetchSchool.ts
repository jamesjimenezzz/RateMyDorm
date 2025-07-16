import prisma from "@/lib/prisma";

export async function fetchSchool(slug: string) {
  try {
    const school = await prisma?.school.findUnique({
      where: {
        slug: slug,
      },
      include: {
        dorms: {
          include: {
            reviews: true,
          },
        },
      },
    });

    return school;
  } catch (error) {
    return null;
  }
}
