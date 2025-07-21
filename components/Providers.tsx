"use client";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider>
        {children}
        <Toaster
          toastOptions={{
            classNames: {
              error: "bg-red-500 text-white font-semibold shadow-lg",
              success: "bg-green-500 text-white font-semibold shadow-lg",
            },
          }}
        />
      </ClerkProvider>
    </QueryClientProvider>
  );
};

export default Providers;
