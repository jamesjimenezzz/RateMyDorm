"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rating } from "react-simple-star-rating";
import { Progress } from "@/components/ui/progress";
import { SquareArrowOutUpRight, Star } from "lucide-react";
import Link from "next/link";
import LabelForm from "@/components/LabelForm";
import Review from "./Review";
import { Dorm, Review as ReviewType, User } from "@prisma/client";
import { calculateRatings } from "@/lib/calculateRatings";
import { useFetchReviews } from "@/hooks/useReview";
import { Funnel } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Spinner from "@/components/Spinner";
import { notFound } from "next/navigation";
interface Props {
  dorm: Dorm & { reviews: ReviewType[] };
  dormSlug: string;
}

const HeroReview = ({ dorm, dormSlug }: Props) => {
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState<number | undefined>(undefined);

  const { data, isLoading } = useFetchReviews(dormSlug as string, page, rating);

  const reviews = data?.reviews;
  const hasMore = data?.hasMore;

  if (isLoading) return <Spinner />;

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

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    if (e.target.value === "all") {
      setRating(undefined);
    } else {
      setRating(Number(e.target.value));
    }
  };

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
          <div className="flex flex-col sticky top-20 self-start gap-7">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-bold text-3xl">
                  {overallRating.toFixed(1) || "0"}
                </CardTitle>
                <Rating
                  SVGstyle={{
                    display: "inline-block",
                  }}
                  initialValue={overallRating || 0}
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
                      initialValue={overallCleanliness || 0}
                      size={17}
                      readonly
                    />
                    <LabelForm className="pt-0.5">
                      {overallCleanliness.toFixed(1) || 0}
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
                      initialValue={overallNoiseLevel || 0}
                      size={17}
                      readonly
                    />
                    <LabelForm className="pt-0.5">
                      {overallNoiseLevel.toFixed(1) || 0}
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
                      initialValue={overallLocation || 0}
                      size={17}
                      readonly
                    />
                    <LabelForm className="pt-0.5">
                      {overallLocation.toFixed(1) || 0}
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
                      initialValue={overallAmenities || 0}
                      size={17}
                      readonly
                    />
                    <LabelForm className="pt-0.5">
                      {overallAmenities.toFixed(1) || 0}
                    </LabelForm>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Link href={`/add-reviews/${dorm.slug}`}>
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
            </Link>
          </div>

          <div className="w-full col-span-2">
            <div className="flex items-center gap-2 mx-2 my-5">
              <Funnel className="text-gray-600" size={20} />
              <Select
                value={rating?.toString() ?? "all"}
                defaultValue="all"
                onValueChange={(value) => {
                  if (value === "all") {
                    setRating(undefined);
                  } else {
                    setRating(Number(value));
                  }
                  setPage(1);
                }}
              >
                <SelectTrigger className="w-[200px] text-sm">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>

                  <SelectItem value="1">1 Star</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {reviews && reviews.length > 0 ? (
              reviews?.map((review: ReviewType & { user: User }) => (
                <Review key={review.id} review={review} />
              ))
            ) : (
              <div className="flex justify-center items-center ">
                <p className="text-gray-500">No reviews found</p>
              </div>
            )}

            <div className="flex justify-center pt-5">
              <Pagination>
                <PaginationContent>
                  {page > 1 && (
                    <>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => setPage(page - 1)}
                          href="#"
                        />
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationLink
                          onClick={() => setPage(page - 1)}
                          href="#"
                        >
                          {page - 1}
                        </PaginationLink>
                      </PaginationItem>
                    </>
                  )}

                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                  {hasMore && (
                    <>
                      <PaginationItem>
                        <PaginationLink href="#">{page + 1}</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setPage(page + 1)}
                          href="#"
                        />
                      </PaginationItem>
                    </>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroReview;
