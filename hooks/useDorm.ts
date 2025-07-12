import { addDorm } from "@/lib/api/dorms";
import { useMutation } from "@tanstack/react-query";

export function useAddDorm() {
  return useMutation({
    mutationFn: addDorm,
  });
}
