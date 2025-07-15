import { AddDormSchemaType } from "@/lib/addDormSchema";
import { addReview } from "@/lib/api/review";
import { useMutation } from "@tanstack/react-query";

export const useReview = () => {
  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: AddDormSchemaType }) =>
      addReview(slug, data),
  });
};
