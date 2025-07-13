"use client";
import React from "react";
import HeaderDorm from "./HeaderDorm";
import HeroDorm from "./HeroDorm";
import { useFetchSchool } from "@/hooks/useSchool";
import { notFound, useParams } from "next/navigation";

const DormPage = () => {
  const { slug } = useParams();
  const { data: school, isFetching } = useFetchSchool(slug as string);

  if (!school) {
    return notFound();
  }

  return (
    <>
      <div className="max-w-7xl  mx-auto px-5">
        <HeaderDorm school={school} />
      </div>
      <HeroDorm school={school} />
    </>
  );
};

export default DormPage;
