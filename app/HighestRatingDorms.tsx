import React from "react";

import { Dorm, School, Review } from "@prisma/client";
import RatingDorm from "./RatingDorm";

const HighestRatingDorms = ({
  dorms,
}: {
  dorms: (Dorm & { reviews: Review[] } & { school: School })[];
}) => {
  return (
    <div className="my-15 w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Highest Rated Dorms</h1>
        <p className="text-muted-foreground">
          Explore the highest rated dorms on our platform
        </p>
      </div>
      <div className="flex gap-5 mt-10 overflow-x-auto whitespace-nowrap">
        {dorms.map((dorm) => (
          <RatingDorm dorm={dorm} key={dorm.id} />
        ))}
      </div>
    </div>
  );
};

export default HighestRatingDorms;
