import { AddDormSchemaType } from "../addDormSchema";

export const addReview = async (slug: string, data: AddDormSchemaType) => {
  try {
    const res = await fetch(`/api/add-reviews/${slug}`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    return { error: "Failed to add review" };
  }
};
