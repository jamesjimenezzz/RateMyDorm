import React from "react";
import HeaderReview from "./HeaderReview";
import HeroReview from "./HeroReview";

const ReviewsPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <HeaderReview />
      </div>
      <HeroReview />
    </>
  );
};

export default ReviewsPage;
