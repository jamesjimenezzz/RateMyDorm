import React from "react";
import DormPage from "./DormPageClient";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchSchool } from "@/lib/server/fetchSchool";

const MainDormPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["school", slug],
    queryFn: () => fetchSchool(slug),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DormPage slug={slug} />
      </HydrationBoundary>
    </>
  );
};

export default MainDormPage;
