import {
  FetchPendingDorms,
  updatePendingDorms,
} from "@/lib/api/admin/AdminFetches";
import { addDorm, fetchDorm } from "@/lib/api/dorms";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

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

export function useFetchPendingDorms() {
  return useQuery({
    queryKey: ["pendingDorms"],
    queryFn: FetchPendingDorms,
  });
}

export function useUpdatePendingDorms() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePendingDorms,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dorms"] });
      queryClient.invalidateQueries({ queryKey: ["pendingDorms"] });
    },
  });
}
