"use client";
import { Card, CardContent } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import Image from "next/image";
import placeholder from "@/public/placeholder.svg";
import React from "react";
import { Dorm, Review, School } from "@prisma/client";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
import placeholder2 from "@/public/placeholder2.png";

const PopDorm = ({
  dorm,
}: {
  dorm: Dorm & { reviews: Review[] } & { school: School };
}) => {
  console.log(dorm);

  const overallRate =
    dorm.reviews.reduce((acc, review) => acc + review.overallRate, 0) /
    dorm.reviews.length;

  return (
    <>
      <Link href={`/reviews/${dorm.school.slug}/${dorm.slug}`}>
        <Card className="p-0  pb-5 border-none  gap-1.5 min-w-[240px] rounded-lg">
          <div className="w-full h-60   rounded-lg">
            <Image
              className="w-full rounded-lg h-full object-cover"
              src={placeholder2}
              alt="testpic"
              width={350}
              height={200}
            />
          </div>
          <CardContent className="px-1 border-none py-0 flex flex-col gap-1.5 text-start">
            <div className="flex flex-col gap-0.5">
              <CardTitle className="text-lg">{dorm.name}</CardTitle>
              <CardDescription className="text-black">
                <p>{dorm.school.name}</p>
              </CardDescription>
            </div>

            <CardDescription>
              <Rating
                SVGstyle={{
                  display: "inline-block",
                }}
                size={20}
                initialValue={overallRate}
                readonly
              />
              <p>{overallRate.toFixed(1)}</p>
              <p>{dorm.reviews.length} reviews </p>
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default PopDorm;
