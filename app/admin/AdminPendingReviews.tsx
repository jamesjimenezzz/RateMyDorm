"use client";
import React from "react";
import PendingReviews from "./PendingReviews";
import { useFetchPendingReviews } from "@/hooks/useReview";
import { Review } from "@prisma/client";

const AdminPendingReviews = () => {
  const { data: pendingReviews } = useFetchPendingReviews();

  return (
    <div>
      <h1 className="flex gap-2 my-5">
        Pending Requests: <span>{pendingReviews && pendingReviews.length}</span>
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {pendingReviews?.map((review: Review) => (
          <PendingReviews key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AdminPendingReviews;
