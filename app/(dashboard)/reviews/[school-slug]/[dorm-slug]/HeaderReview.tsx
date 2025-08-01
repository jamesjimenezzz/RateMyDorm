"use client";
import React from "react";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import DormsBackToUniv from "@/components/DormsBackToUniv";
import { Dorm, Review, School } from "@prisma/client";
import Link from "next/link";
import { calculateRatings } from "@/lib/calculateRatings";

interface HeaderReviewProps {
  school: School;
  dorm: Dorm & { reviews: Review[] };
}

const DormPage = ({ school, dorm }: HeaderReviewProps) => {
  const { overallRating } = calculateRatings(dorm?.reviews);

  return (
    <div className="pb-12 ">
      <div className="pt-10 ">
        <DormsBackToUniv
          schoolName={school.name}
          dormName={dorm.name}
          schoolSlug={school.slug}
          dormSlug={dorm.slug!}
        />
      </div>
      <div className="grid grid-cols-2 items-center pb-5 gap-8">
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-5">
            <h1 className="text-4xl font-bold">{dorm.name}</h1>
            <span className="flex items-center bg-gray-100 rounded-xl px-2.5 py-1 gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={15} />
              <p className="text-xs font-semibold">
                {overallRating ? overallRating.toFixed(1) : "0"}
              </p>
            </span>
          </div>
          <p className="text-muted-foreground flex items-center gap-2">
            <span>
              <MapPin size={16} />
            </span>{" "}
            {school.name}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            Gagawan pa ng ai description typeshit placeholder para di
            makalimutan
          </p>

          <div className="flex items-center gap-4 text-sm">
            <Link href={`/add-dorms/${school.slug}`}>
              <Button className="cursor-pointer px-6 py-5">Write Review</Button>
            </Link>
            <Button className="cursor-pointer px-6 py-5" variant={"outline"}>
              Read Reviews
            </Button>
          </div>
        </div>
        <div className="h-80 w-full">
          <div className="h-full w-[600px] bg-gray-200 animate-pulse rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default DormPage;
