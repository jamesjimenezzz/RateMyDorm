"use client";
import React from "react";
import Landing from "./Landing";
import PopSchools from "./PopSchools";
import Footer from "./Footer";
import PopDorms from "./PopDorms";
import HighestRatingDorms from "./HighestRatingDorms";
import { useFetchSchools } from "@/hooks/useSchool";
import Spinner from "@/components/Spinner";

const Home = () => {
  const { data: schools, isFetching } = useFetchSchools();

  if (isFetching) return <Spinner />;

  return (
    <>
      <div className="max-w-7xl px-5 text-center flex flex-col items-center justify-center  overflow-hidden mx-auto">
        <Landing />
        <PopSchools schools={schools || []} />
        <PopDorms />
        <HighestRatingDorms />
      </div>
    </>
  );
};

export default Home;
