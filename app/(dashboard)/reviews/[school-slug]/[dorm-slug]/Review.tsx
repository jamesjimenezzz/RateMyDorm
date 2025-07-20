"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Rating } from "react-simple-star-rating";
import { Review as ReviewType, User } from "@prisma/client";
import { calculateRatings } from "@/lib/calculateRatings";
import { BadgeCheckIcon } from "lucide-react";

const Review = ({ review }: { review: ReviewType & { user: User } }) => {
  const genreOfRates = [
    review.cleanlinessRate,
    review.noiseLevelRate,
    review.locationRate,
    review.amenitiesRate,
  ];

  const { averageRateByUser } = calculateRatings([review]);

  return (
    <>
      <Card className="mb-7">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Rating
                  SVGstyle={{
                    display: "inline-block",
                  }}
                  initialValue={review.overallRate}
                  size={20}
                  readonly
                />
                <p className="font-semibold pt-0.5">{review.overallRate} / 5</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div>
              <h1 className="font-semibold">{review.reviewTitle}</h1>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-base text-gray-500">{review.reviewDescription}</p>
        </CardContent>
        <CardFooter className="  ">
          <div className="text-sm text-gray-500 flex justify-between items-center w-full border-t border-gray-300 pt-5">
            <div className="flex items-center gap-4 ">
              <p>{review.userName || "Anonymous"}</p>
              <p>•</p>
              <p>{review.yearLived}</p>
              <p>•</p>
              <p>{review.roomType}</p>
              <p>•</p>
              <p>{review.semester}</p>
              <p>{averageRateByUser[0].toFixed(1)}</p>
            </div>

            {review.user.isStudentEmail && (
              <div className="flex items-center bg-blue-500 rounded-lg p-1 px-1.5 gap-2">
                <BadgeCheckIcon className="w-4 h-4 text-white" />
                <p className="text-white text-sm">Verified Student</p>
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Review;
