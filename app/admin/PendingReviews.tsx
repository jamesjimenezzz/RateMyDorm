import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Review } from "@prisma/client";
import Image from "next/image";
import React from "react";
import placeholder from "@/public/placeholder.svg";
import { Check, Trash } from "lucide-react";
import { useUpdatePendingReview } from "@/hooks/useReview";

interface Props {
  review: Review;
}

const truncate = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength) + "...";
};

const PendingReviews = ({ review }: Props) => {
  const { mutate, isPending } = useUpdatePendingReview();

  return (
    <Card className={`max-w-2xl ${isPending ? "opacity-50" : ""}`}>
      <CardContent className="flex justify-between gap-10">
        <div className="flex flex-col">
          <div>
            <h1 className="font-bold">{truncate(review.reviewTitle, 30)}</h1>
            <p className="text-xs text-gray-500">
              {truncate(review.reviewDescription, 250)}
            </p>
          </div>
          <div className="text-xs  my-2">
            <p>{truncate(review.likeMost, 100)}</p>
          </div>
          <div className="text-xs  my-2">
            <p>{truncate(review.improve, 100)}</p>
          </div>
          <div className="text-xs  my-2">
            <p>{truncate(review.recommendation, 100)}</p>
          </div>
          <div className="flex flex-1  text-xs my-2">
            <p>{review.userName || "Anonymous"}</p>
          </div>
          <div className="flex items-center gap-2">
            <Trash size={20} />
            <Check
              className={`cursor-pointer ${isPending ? "animate-pulse" : ""}`}
              size={20}
              onClick={() => mutate(review.id)}
            />
          </div>
        </div>

        <div className="max-w-[200px] ">
          <Image
            src={placeholder}
            alt="dorm"
            className="rounded-lg w-full  object-cover"
            width={150}
            height={150}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PendingReviews;
