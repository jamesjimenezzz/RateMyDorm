"use client";
import React from "react";
import HeaderDorm from "./HeaderDorm";
import HeroDorm from "./HeroDorm";
import { Dorm, Review, School } from "@prisma/client";
import { useFetchSchool } from "@/hooks/useSchool";
import Spinner from "@/components/Spinner";
import { notFound } from "next/navigation";

const DormPage = ({ slug }: { slug: string }) => {
  const { data: school, isLoading } = useFetchSchool(slug as string);

  if (isLoading && !school) return <Spinner />;

  if (!school) return notFound();

  return (
    <>
      <div className="max-w-7xl  mx-auto px-5">
        <HeaderDorm
          school={
            school as School & { dorms: (Dorm & { reviews: Review[] })[] }
          }
        />
      </div>
      <HeroDorm school={school as School & { dorms: Dorm[] }} />
    </>
  );
};

export default DormPage;
