import { School } from "@prisma/client";
import { AddSchoolSchemaType } from "@/lib/addSchoolSchema";

export async function fetchSchools(): Promise<School[]> {
  try {
    const res = await fetch("/api/schools");
    if (!res.ok) {
      throw new Error("Failed to fetch schools");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function addSchool(data: AddSchoolSchemaType) {
  try {
    const res = await fetch("/api/schools", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchSchool(slug: string) {
  try {
    const res = await fetch(`/api/school/${slug}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchPendingSchools() {
  try {
    const schools = await prisma?.school.findMany({
      where: {
        status: "pending",
      },
    });

    if (!schools) {
      throw new Error("Failed to fetch pending schools");
    }

    return schools;
  } catch (error) {
    console.log(error);
    return [];
  }
}
