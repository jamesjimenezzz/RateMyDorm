"use client";
import React, { useEffect, useState } from "react";
import HeaderReview from "./HeaderReview";
import HeroReview from "./HeroReview";
import { notFound, useParams } from "next/navigation";
import { useFetchSchool } from "@/hooks/useSchool";
import { useFetchDorm } from "@/hooks/useDorm";

const ReviewsPage = () => {
  const params = useParams();
  const schoolSlug = params["school-slug"];
  const dormSlug = params["dorm-slug"];

  const { data: school } = useFetchSchool(schoolSlug as string);
  const { data: dorm } = useFetchDorm(dormSlug as string);

  if (!school || !dorm) {
    return notFound();
  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <HeaderReview school={school} dorm={dorm} />
      </div>
      <HeroReview dorm={dorm} />
    </>
  );
};

export default ReviewsPage;
