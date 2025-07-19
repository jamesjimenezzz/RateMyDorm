import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Review } from "@prisma/client";
import React from "react";

interface Props {
  review: Review;
}

const PendingReviews = ({ review }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{review.reviewTitle}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default PendingReviews;
