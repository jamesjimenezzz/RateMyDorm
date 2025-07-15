import { AddReviewSchemaType } from "@/lib/addReviewSchema";
import { addReview } from "@/lib/api/review";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useReview = () => {
  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: AddReviewSchemaType }) =>
      sleep(1500).then(() => addReview(slug, data)),
  });
};
