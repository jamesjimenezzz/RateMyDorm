"use client";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rating } from "react-simple-star-rating";
import { Progress } from "@/components/ui/progress";
import { Link, SquareArrowOutUpRight, Star } from "lucide-react";
import LabelForm from "@/components/LabelForm";
import { Button } from "@/components/ui/button";
import Review from "./Review";
import { Dorm, Review as ReviewType } from "@prisma/client";
import { calculateRatings } from "@/lib/calculateRatings";

interface Props {
  dorm: Dorm & { reviews: ReviewType[] };
}

const HeroReview = ({ dorm }: Props) => {
  const {
    overallCleanliness,
    overallNoiseLevel,
    overallLocation,
    overallAmenities,
    averageRateByUser,
    overallRating,
  } = calculateRatings(dorm.reviews);

  const progressBar = [5, 4, 3, 2, 1].map((star) => {
    return {
      star: star,
      count: averageRateByUser.filter((rate) => Math.round(rate) === star)
        .length,
    };
  });

  return (
    <div className="bg-[#f9fafb] py-15 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h1 className="text-3xl font-bold">Student Reviews</h1>
          <p className="text-gray-500">
            Real experiences from students who lived in {dorm.name}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-15">
          <div className="flex flex-col sticky top-12 self-start gap-7">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-bold text-3xl">
                  {overallRating.toFixed(1)}
                </CardTitle>
                <Rating
                  SVGstyle={{
                    display: "inline-block",
                  }}
                  initialValue={overallRating}
                  allowFraction
                  size={25}
                  readonly
                />
                <p className="text-sm text-gray-500">
                  Based on {dorm.reviews.length} reviews
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {progressBar.map((progress) => (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 w-full flex-1">
                      <div className="flex items-center gap-0.5">
                        <p className="text-sm">{progress.star}</p>
                        <Star
                          className="fill-yellow-500 text-yellow-500"
                          size={12}
                        />
                      </div>
                      <Progress
                        className="h-2 max-w-75"
                        value={(progress.count / dorm.reviews.length) * 100}
                      />
                    </div>

                    <p className="text-sm">{progress.count}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bold text-xl">
                  Category Ratings
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center">
                  <div className="flex-1">
                    <LabelForm>Cleanliness</LabelForm>
                  </div>

                  <div className="flex pb-1 items-center gap-1.5">
                    <Rating
                      SVGstyle={{
                        display: "inline-block",
                      }}
                      initialValue={overallCleanliness}
                      size={17}
                      readonly
                    />
                    <LabelForm className="pt-0.5">
                      {overallCleanliness.toFixed(1)}
                    </LabelForm>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1">
                    <LabelForm>Noise Level</LabelForm>
                  </div>

                  <div className="flex pb-1 items-center gap-1.5">
                    <Rating
                      SVGstyle={{
                        display: "inline-block",
                      }}
                      initialValue={overallNoiseLevel}
                      size={17}
                      readonly
                    />
                    <LabelForm className="pt-0.5">
                      {overallNoiseLevel.toFixed(1)}
                    </LabelForm>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1">
                    <LabelForm>Location</LabelForm>
                  </div>

                  <div className="flex pb-1 items-center gap-1.5">
                    <Rating
                      SVGstyle={{
                        display: "inline-block",
                      }}
                      initialValue={overallLocation}
                      size={17}
                      readonly
                    />
                    <LabelForm className="pt-0.5">
                      {overallLocation.toFixed(1)}
                    </LabelForm>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1">
                    <LabelForm>Amenities</LabelForm>
                  </div>

                  <div className="flex pb-1 items-center gap-1.5">
                    <Rating
                      SVGstyle={{
                        display: "inline-block",
                      }}
                      initialValue={overallAmenities}
                      size={17}
                      readonly
                    />
                    <LabelForm className="pt-0.5">
                      {overallAmenities.toFixed(1)}
                    </LabelForm>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex justify-center items-center gap-15 text-center">
                <div className="">
                  <h1 className="font-bold text-2xl">67%</h1>
                  <p className="text-xs text-gray-500">Recommended</p>
                </div>

                <div className="">
                  <h1 className="font-bold text-2xl">35%</h1>
                  <p className="text-xs text-gray-500">Helpful votes</p>
                </div>
              </CardContent>
            </Card>

            <div className=" hover:bg-gray-100 transition-all duration-300 hover:border-gray-600  border-2 border-gray-300 border-dashed  rounded-lg p-10 cursor-pointer">
              <div className="flex flex-col gap-2   text-center items-center justify-centers">
                <div className="rounded-full bg-gray-200 p-4">
                  <SquareArrowOutUpRight size={25} />
                </div>
                <h1 className="text-xl font-bold">Share your experience</h1>
                <p className="text-sm max-w-[250px] text-muted-foreground">
                  Help other students by adding a review that's not listed
                </p>
              </div>
            </div>
          </div>

          <div className="w-full col-span-2">
            {dorm?.reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
            <div className="flex justify-center pt-5">
              <Button className="px-10 cursor-pointer">See more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroReview;
