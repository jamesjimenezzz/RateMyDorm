import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchSchools } from "@/lib/api/school";
import { addSchool } from "@/lib/api/school";
import { SchoolPassData } from "@/types";

export function useFetchSchools() {
  return useQuery({
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
