"use client";
import React from "react";
import PendingReviews from "./PendingReviews";
import { useFetchPendingReviews } from "@/hooks/AdminFetch";
import { Review } from "@prisma/client";

const AdminPendingReviews = () => {
  const { data: pendingReviews, isLoading } = useFetchPendingReviews();

  return (
    <div>
      <h1 className="flex gap-2 my-5">
        Pending Requests: <span>{pendingReviews && pendingReviews.length}</span>
      </h1>
      <div>
        {pendingReviews?.map((review: Review) => (
          <PendingReviews key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AdminPendingReviews;
