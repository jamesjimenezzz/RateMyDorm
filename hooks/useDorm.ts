import { addDorm, fetchDorm } from "@/lib/api/dorms";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

export function useAddDorm() {
  return useMutation({
    mutationFn: addDorm,
  });
}

export function useFetchDorm(slug: string) {
  return useSuspenseQuery({
    queryKey: ["dorm", slug],
    queryFn: () => fetchDorm(slug),
  });
}
