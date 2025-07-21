"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import placeholder from "@/public/placeholder.svg";
import { Dorm, School, Review } from "@prisma/client";
import { Rating } from "react-simple-star-rating";
import placeholder2 from "@/public/placeholder2.png";

const RatingDorm = ({
  dorm,
}: {
  dorm: Dorm & { reviews: Review[] } & { school: School };
}) => {
  const averageRating =
    dorm.reviews.reduce((acc, review) => acc + review.overallRate, 0) /
    dorm.reviews.length;

  const overallFixedRate = averageRating.toFixed(1);

  return (
    <>
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
        <CardContent className="px-2 border-none py-0 flex flex-col gap-1.5 text-start">
          <div className="flex flex-col gap-0.5">
            <CardTitle className="text-lg">{dorm.name}</CardTitle>
            <CardDescription className="text-black">
              <p>{dorm.school.name}</p>
            </CardDescription>
          </div>

          <CardDescription className="flex items-center justify-between">
            <Rating
              SVGstyle={{
                display: "inline-block",
              }}
              initialValue={Number(overallFixedRate)}
              allowFraction={true}
              size={20}
              readonly
            />
            <p>{dorm.reviews.length} reviews</p>
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
};

export default RatingDorm;
