import { FetchPendingSchools } from "@/lib/api/admin/AdminFetches";
import { FetchPendingDorms } from "@/lib/api/admin/AdminFetches";
import { FetchPendingReviews } from "@/lib/api/admin/AdminFetches";

import { useQuery } from "@tanstack/react-query";

export function useFetchPendingSchools() {
  return useQuery({
    queryKey: ["schools"],
    queryFn: FetchPendingSchools,
  });
}

export function useFetchPendingDorms() {
  return useQuery({
    queryKey: ["dorms"],
    queryFn: FetchPendingDorms,
  });
}

export function useFetchPendingReviews() {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: FetchPendingReviews,
  });
}
