import { School } from "@prisma/client";
import { SchoolPassData } from "@/types";

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

export async function addSchool(data: SchoolPassData) {
  try {
    const res = await fetch("/api/schools", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
