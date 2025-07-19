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

export const fetchReviews = async (
  slug: string,
  page: number,
  rating?: number
) => {
  try {
    const res = await fetch(
      `/api/review/${slug}?page=${page}&limit=8${
        rating ? `&rating=${rating}` : ""
      }`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function fetchPendingReviews() {
  try {
    const reviews = await prisma?.review.findMany({
      where: {
        status: "pending",
      },
    });

    if (!reviews) {
      throw new Error("Failed to fetch pending reviews.");
    }

    return reviews;
  } catch (error) {
    console.log(error);
    return null;
  }
}
