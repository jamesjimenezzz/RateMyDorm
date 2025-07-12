"use client";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider>{children}</ClerkProvider>
    </QueryClientProvider>
  );
};

export default Providers;
