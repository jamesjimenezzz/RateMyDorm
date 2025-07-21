import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import placeholder from "@/public/placeholder.svg";
import { Dorm, School } from "@prisma/client";
import { Review } from "@prisma/client";
import PopDorm from "./PopDorm";

const PopDorms = ({
  dorms,
}: {
  dorms: (Dorm & { reviews: Review[] } & { school: School })[];
}) => {
  console.log(dorms);

  return (
    <div className="my-15 w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Popular Dorms</h1>
        <p className="text-muted-foreground">
          Explore the most reviewed dorms on our platform
        </p>
      </div>
      <div className="flex gap-5 mt-10 overflow-x-auto whitespace-nowrap">
        {dorms?.map((dorm) => (
          <PopDorm key={dorm.id} dorm={dorm} />
        ))}
      </div>
    </div>
  );
};

export default PopDorms;
