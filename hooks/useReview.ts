import { AddReviewSchemaType } from "@/lib/addReviewSchema";
import {
  FetchPendingReviews,
  updatePendingReview,
} from "@/lib/api/admin/AdminFetches";
import { addReview, fetchReviews } from "@/lib/api/review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useFetchReviews = (
  slug: string,
  page: number,
  rating?: number
) => {
  return useQuery({
    queryKey: ["reviews", slug, page, rating],
    queryFn: () => fetchReviews(slug, page, rating),
    staleTime: 1000 * 60 * 5,
  });
};

export const useReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: AddReviewSchemaType }) =>
      sleep(1500).then(() => addReview(slug, data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
};

export function useFetchPendingReviews() {
  return useQuery({
    queryKey: ["pendingReviews"],
    queryFn: FetchPendingReviews,
  });
}

export function useUpdatePendingReview() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePendingReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pendingReviews"] });
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
}
