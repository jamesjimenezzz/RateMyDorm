"use client";
import Link from "next/link";
import React from "react";
import BackToHome from "@/components/BackToHome";
import { useFetchSchools } from "@/hooks/useSchool";

const AllSchools = () => {
  const { data: schoolsData, isFetching } = useFetchSchools();

  const filterAlphabetically = schoolsData?.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="max-w-7xl px-5 mx-auto min-h-screen my-10">
      <BackToHome />
      <div>
        <div className="flex font-semibold gap-2 items-center">
          <p className=" text-2xl">{schoolsData?.length}</p>
          <h1 className="text-2xl">Schools on RateMyDorm</h1>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-muted-foreground">Didn't find your school?</p>
          <Link href={"/add-school"}>
            <p className="hover:underline cursor-pointer font-semibold text-blue-400">
              Add your school
            </p>
          </Link>
        </div>
      </div>
      <div className="my-7">
        {filterAlphabetically?.map((school, index) => (
          <p
            className="font-[500] my-1.5 hover:underline cursor-pointer"
            key={school.id}
          >
            <Link href={`/dorms/${school.slug}`}>{school.name} </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AllSchools;
