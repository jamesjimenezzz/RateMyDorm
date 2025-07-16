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

export const fetchReviews = async (slug: string) => {
  try {
    const res = await fetch(`/api/review/${slug}`);
    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    return { error: "Failed to fetch reviews" };
  }
};
