import { AddDormSchemaType } from "../addDormSchema";

interface AddDormProps {
  dorm: AddDormSchemaType;
  slug: string;
}

export const addDorm = async ({ dorm, slug }: AddDormProps) => {
  try {
    const res = await fetch(`/api/dorms/${slug}`, {
      method: "POST",
      body: JSON.stringify(dorm),
    });

    if (!res.ok) {
      throw new Error("Failed to add dorm");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Failed to add dorm" };
  }
};
