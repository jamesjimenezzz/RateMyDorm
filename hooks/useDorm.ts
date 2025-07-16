import { addDorm, fetchDorm } from "@/lib/api/dorms";
import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";

export function useAddDorm() {
  return useMutation({
    mutationFn: addDorm,
  });
}

export function useFetchDorm(slug: string) {
  return useQuery({
    queryKey: ["dorm", slug],
    queryFn: () => fetchDorm(slug),
    staleTime: 1000 * 60 * 5,
  });
}
