import {
  dehydrate,
  QueryClient,
  ReactQueryStreamedHydration,
} from "@tanstack/react-query";
import React from "react";

interface HydrationLayoutProps {
  queryKey: string[];
  queryFn: () => Promise<any>;
  children: React.ReactNode;
}

const HydrationLayout = async ({
  queryKey,
  queryFn,
  children,
}: HydrationLayoutProps) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey, queryFn });

  return (
    <>
      <ReactQueryStreamedHydration state={dehydrate(queryClient)}>
        {children}
      </ReactQueryStreamedHydration>
    </>
  );
};

export default HydrationLayout;
