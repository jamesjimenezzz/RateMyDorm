import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { fetchSchool, fetchSchools } from "@/lib/api/school";
import { addSchool } from "@/lib/api/school";
import { SchoolPassData } from "@/types";

export function useFetchSchools() {
  return useSuspenseQuery({
    queryKey: ["schools"],
    queryFn: fetchSchools,
  });
}

export function useAddSchool() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addSchool,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schools"] });
    },
  });
}

export function useFetchSchool(slug: string) {
  return useSuspenseQuery({
    queryKey: ["school", slug],
    queryFn: () => fetchSchool(slug),
  });
}
