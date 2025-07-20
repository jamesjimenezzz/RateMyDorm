import prisma from "@/lib/prisma";

export async function fetchSchool(slug: string) {
  try {
    const school = await prisma?.school.findUnique({
      where: {
        slug: slug,
        status: "approved",
      },
    });

    return school;
  } catch (error) {
    return null;
  }
}
