import React from "react";
import ReviewsPage from "./ReviewPageClient";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchSchool } from "@/lib/server/fetchSchool";
import { fetchDorm } from "@/lib/server/fetchDorm";
import { fetchReviews } from "@/lib/server/fetchReviews";

const ReviewMainPage = async ({
  params,
}: {
  params: Promise<{ "school-slug": string; "dorm-slug": string }>;
}) => {
  const queryClient = new QueryClient();

  const { "school-slug": schoolSlug, "dorm-slug": dormSlug } = await params;

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["school", schoolSlug],
      queryFn: () => fetchSchool(schoolSlug),
    }),
    queryClient.prefetchQuery({
      queryKey: ["dorm", dormSlug],
      queryFn: () => fetchDorm(dormSlug),
    }),
    queryClient.prefetchQuery({
      queryKey: ["reviews", dormSlug],
      queryFn: () => fetchReviews(dormSlug),
    }),
  ]);

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ReviewsPage schoolSlug={schoolSlug} dormSlug={dormSlug} />
      </HydrationBoundary>
    </>
  );
};

export default ReviewMainPage;
