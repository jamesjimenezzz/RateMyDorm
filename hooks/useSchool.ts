import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchSchool, fetchSchools } from "@/lib/api/school";
import { addSchool } from "@/lib/api/school";
import { SchoolPassData } from "@/types";

export function useFetchSchools() {
  return useQuery({
    queryKey: ["schools"],
    queryFn: fetchSchools,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
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
  return useQuery({
    queryKey: ["school", slug],
    queryFn: () => fetchSchool(slug),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
}
