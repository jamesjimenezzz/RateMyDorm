import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchSchool, fetchSchools } from "@/lib/api/school";
import { addSchool } from "@/lib/api/school";
import {
  FetchPendingSchools,
  updatePendingSchools,
} from "@/lib/api/admin/AdminFetches";
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
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
}

export function useFetchPendingSchools() {
  return useQuery({
    queryKey: ["pendingSchools"],
    queryFn: FetchPendingSchools,
  });
}

export function useUpdateSchools() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePendingSchools,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pendingSchools"],
      }),
        queryClient.invalidateQueries({ queryKey: ["schools"] });
    },
  });
}
