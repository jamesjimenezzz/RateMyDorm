import { School } from "@prisma/client";
import { AddSchoolSchemaType } from "@/lib/addSchoolSchema";

export async function fetchSchools(): Promise<School[]> {
  try {
    const res = await fetch("/api/schools");
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
