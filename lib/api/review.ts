import { AddReviewSchemaType } from "../addReviewSchema";

export const addReview = async (slug: string, data: AddReviewSchemaType) => {
  try {
    const res = await fetch(`/api/add-reviews/${slug}`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to add review");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    return { error: "Failed to add review" };
  }
};
