import { AddReviewSchemaType } from "@/lib/addReviewSchema";
import { addReview, fetchReviews } from "@/lib/api/review";
import { useMutation, useQuery } from "@tanstack/react-query";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useReview = () => {
  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: AddReviewSchemaType }) =>
      sleep(1500).then(() => addReview(slug, data)),
  });
};

export const useFetchReviews = (slug: string) => {
  return useQuery({
    queryKey: ["reviews", slug],
    queryFn: () => fetchReviews(slug),
    staleTime: 1000 * 60 * 5,
  });
};
