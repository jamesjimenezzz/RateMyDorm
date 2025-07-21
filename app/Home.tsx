import React from "react";
import Landing from "./Landing";
import PopSchools from "./PopSchools";

import PopDorms from "./PopDorms";
import HighestRatingDorms from "./HighestRatingDorms";
import { HomePageSchools } from "@/lib/server/HomePageSchools";
import { School } from "@prisma/client";
import { Dorm } from "@prisma/client";
import { Review } from "@prisma/client";
import { HomePageDorms } from "@/lib/server/HomePageDorms";

const Home = async () => {
  const schools = await HomePageSchools();
  const dorms = await HomePageDorms();
  return (
    <>
      <div className="max-w-7xl px-5 text-center flex flex-col items-center justify-center  overflow-hidden mx-auto">
        <Landing />
        <PopSchools
          schools={
            schools as unknown as (School & {
              dorms: (Dorm & { reviews: Review[] })[];
            })[]
          }
        />
        <PopDorms
          dorms={
            dorms as unknown as (Dorm & { reviews: Review[] } & {
              school: School;
            })[]
          }
        />
        <HighestRatingDorms />
      </div>
    </>
  );
};

export default Home;
