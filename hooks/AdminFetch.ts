import {
  FetchPendingSchools,
  updatePendingSchools,
} from "@/lib/api/admin/AdminFetches";
import { FetchPendingDorms } from "@/lib/api/admin/AdminFetches";
import { FetchPendingReviews } from "@/lib/api/admin/AdminFetches";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useFetchPendingDorms() {
  return useQuery({
    queryKey: ["pendingDorms"],
    queryFn: FetchPendingDorms,
  });
}

export function useFetchPendingReviews() {
  return useQuery({
    queryKey: ["pendingReviews"],
    queryFn: FetchPendingReviews,
  });
}
