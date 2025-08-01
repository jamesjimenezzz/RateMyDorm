import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { Users } from "lucide-react";
import { MessageSquareMore } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import placeholder2 from "@/public/placeholder2.png";
import { Dorm, Review, School } from "@prisma/client";
import { calculateRatings } from "@/lib/calculateRatings";

const Dorms = ({
  dorm,
}: {
  dorm: Dorm & { reviews: Review[] } & { school: School };
}) => {
  const { overallRating } = calculateRatings(dorm.reviews);

  return (
    <Card className="p-0 gap-0 overflow-hidden max-w-[400px]">
      <div className="h-48  relative overflow-hidden ">
        <Image
          className="h-full overflow-hidden p-0 w-full object-cover"
          src={placeholder2}
          alt="dorm"
        />
        <div className="absolute w-full h-full inset-0  bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute top-3 right-3 flex items-center gap-1">
          <div className="flex bg-gray-100 rounded-xl px-2.5 py-1 items-center gap-1.5">
            <Star className="fill-gray-500 text-gray-500" size={13} />
            <p className="text-sm font-[500]">{overallRating.toFixed(1)}</p>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1">
          <div className=" bg-gray-100 rounded-xl px-2.5 py-1 items-center gap-1.5"></div>
        </div>
      </div>
      <CardContent className="p-0 pb-5 flex flex-col gap-1.5 pt-5 px-3">
        <CardTitle className="text-base font-bold">{dorm.name}</CardTitle>
        <CardDescription className="text-sm mb-2.5 flex justify-between text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users size={15} />
            <p>1200</p>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquareMore size={15} />
            <p>{dorm.reviews.length} reviews</p>
          </div>
        </CardDescription>
        <CardDescription className="text-sm w-full  flex flex-col gap-2 text-muted-foreground">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-xs">Student Rating</p>
            </div>
            <div>
              <Rating
                SVGstyle={{
                  display: "inline-block",
                }}
                initialValue={overallRating}
                allowFraction
                readonly
                size={15}
              />
            </div>
          </div>
          <div>
            <Progress
              value={(overallRating / 5) * 100}
              className="w-full h-1.5 [&>div]:bg-gray-600"
            />
          </div>
          <div className="flex gap-2 pt-5 w-full  justify-center ">
            <Link
              className="w-full flex-1/4 "
              href={`/reviews/${dorm.schoolSlug}/${dorm.slug}`}
            >
              <Button className="text-xs py-0 h-8   cursor-pointer w-full">
                Read Reviews
              </Button>
            </Link>
            <Link href={`/add-reviews/${dorm.slug}`}>
              <Button
                variant={"outline"}
                className="text-xs cursor-pointer text-black py-0 h-8"
              >
                Write a Review
              </Button>
            </Link>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default Dorms;
