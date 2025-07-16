"use client";
import React from "react";
import HeaderReview from "./HeaderReview";
import HeroReview from "./HeroReview";
import { notFound, useParams } from "next/navigation";
import { useFetchSchool } from "@/hooks/useSchool";
import { useFetchDorm } from "@/hooks/useDorm";
import Spinner from "@/components/Spinner";
import { useFetchReviews } from "@/hooks/useReview";

interface Props {
  schoolSlug: string;
  dormSlug: string;
}

const ReviewsPage = ({ schoolSlug, dormSlug }: Props) => {
  const { data: school, isLoading: isSchoolLoading } = useFetchSchool(
    schoolSlug as string
  );
  const { data: dorm, isLoading: isDormLoading } = useFetchDorm(
    dormSlug as string
  );

  const { data: reviews, isLoading: isReviewsLoading } = useFetchReviews(
    dormSlug as string
  );

  if (isSchoolLoading || isDormLoading || isReviewsLoading) return <Spinner />;

  if (!school || !dorm) {
    return notFound();
  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <HeaderReview school={school} dorm={dorm} />
      </div>
      <HeroReview dorm={dorm} reviews={reviews} />
    </>
  );
};

export default ReviewsPage;
