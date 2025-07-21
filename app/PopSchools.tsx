import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dorm, Review, School } from "@prisma/client";
import PopSchool from "./PopSchool";

const PopSchools = ({
  schools,
}: {
  schools: (School & { dorms: (Dorm & { reviews: Review[] })[] })[];
}) => {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Popular Schools</h1>
        <p className="text-muted-foreground">
          Explore the most reviewed universities on our platform
        </p>
      </div>
      <div className="grid grid-cols-3 mt-10  gap-6">
        {schools.map((school) => (
          <PopSchool key={school.id} school={school} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link href="/all-schools">
          <Button className="bg-gray-700 p-5.5 cursor-pointer text-base">
            View All Schools
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PopSchools;
