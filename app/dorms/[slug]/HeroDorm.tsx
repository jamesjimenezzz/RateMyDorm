"use client";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import placeholder from "@/public/placeholder.svg";
import { Rating } from "react-simple-star-rating";
import { Users } from "lucide-react";
import { MessageSquareMore } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";
import { Award } from "lucide-react";
import { useParams } from "next/navigation";

const HeroDorm = () => {
  const { slug } = useParams();

  return (
    <div className="bg-[#f9fafb] py-12 px-5 w-full">
      <div className=" max-w-7xl mx-auto">
        <div className="flex items-center justify-center flex-col gap-3">
          <h1 className="text-3xl font-bold">
            Rate Dorms at Northeastern University
          </h1>
          <p>
            Share your experience and read honest reviews from fellow students
          </p>
          <div className="text-muted-foreground flex gap-5">
            <p>3 residence halls</p>
            <span>•</span>
            <p>168 total reviews</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 py-10">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card className="p-0 gap-0 overflow-hidden max-w-[400px]">
              <div className="h-48  relative overflow-hidden ">
                <Image
                  className="h-full overflow-hidden p-0 w-full object-cover"
                  src={placeholder}
                  alt="dorm"
                />
                <div className="absolute w-full h-full inset-0  bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 flex items-center gap-1">
                  <div className="flex bg-gray-100 rounded-xl px-2.5 py-1 items-center gap-1.5">
                    <Star className="fill-gray-500 text-gray-500" size={13} />
                    <p className="text-sm font-[500]">4.7</p>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1">
                  <div className=" bg-gray-100 rounded-xl px-2.5 py-1 items-center gap-1.5">
                    <p className="text-xs text-gray-600  font-semibold">
                      Traditional
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-0 pb-5 flex flex-col gap-1.5 pt-5 px-3">
                <CardTitle className="text-base font-bold">Dorm Name</CardTitle>
                <CardDescription className="text-sm mb-2.5 flex justify-between text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users size={15} />
                    <p>1200</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquareMore size={15} />
                    <p>78 reviews</p>
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
                        initialValue={4}
                        size={15}
                      />
                    </div>
                  </div>
                  <div>
                    <Progress
                      value={80}
                      className="w-full h-1.5 [&>div]:bg-gray-600"
                    />
                  </div>
                  <div className="flex gap-2 pt-5 w-full  justify-center ">
                    <Button className="text-xs py-0 h-8   flex-1/4 cursor-pointer">
                      Read Reviews
                    </Button>
                    <Button
                      variant={"outline"}
                      className="text-xs cursor-pointer text-black py-0 h-8"
                    >
                      Write a Review
                    </Button>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center pb-10 ">
          <Button
            variant={"outline"}
            className="cursor-pointer border-gray-400 text-gray-600 hover:border-gray-700 px-12"
          >
            See More
          </Button>
        </div>

        <div className="py-10 max-w-lg mx-auto hover:bg-gray-100 transition-all duration-300 hover:border-gray-600  border-2 border-gray-300 border-dashed  rounded-lg bg-white w-full">
          <Link href={`/add-dorms/${slug}`}>
            <div className="flex flex-col gap-2   text-center items-center justify-centers">
              <div className="rounded-full bg-gray-200 p-4">
                <SquareArrowOutUpRight size={25} />
              </div>
              <h1 className="text-xl font-bold">Missing a dorm?</h1>
              <p className="text-sm max-w-[250px] text-muted-foreground">
                Help other students by adding a residence hall that's not listed
              </p>
            </div>
          </Link>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-10">
          <div className="bg-white border items-center justify-center text-center rounded-lg  px-8 py-7 max-w-[420px] flex flex-col gap-3">
            <div className="rounded-full bg-blue-200 p-2.5">
              <Heart className="text-blue-600" size={25} />
            </div>
            <h1 className="text-base font-bold">Help Future Students</h1>
            <p className="text-sm text-muted-foreground">
              Your honest review helps incoming students make better housing
              decisions
            </p>
            <p className="text-xs text-muted-foreground">
              253 students already helped
            </p>
          </div>

          <div className="bg-white border items-center justify-center text-center rounded-lg  px-8 py-7 max-w-[420px] flex flex-col gap-3">
            <div className="rounded-full bg-green-200 p-2.5">
              <ChartColumnIncreasing className="text-green-600" size={25} />
            </div>
            <h1 className="text-base font-bold">Build Community Data</h1>
            <p className="text-sm text-muted-foreground">
              Contribute to the largest student housing database in the country
            </p>
            <p className="text-xs text-muted-foreground">Join 3+ reviewers</p>
          </div>

          <div className="bg-white border items-center justify-center text-center rounded-lg  px-8 py-7 max-w-[420px] flex flex-col gap-3">
            <div className="rounded-full bg-violet-200 p-2.5">
              <Award className="text-violet-600" size={25} />
            </div>
            <h1 className="text-base font-bold">Get Recognition</h1>
            <p className="text-sm text-muted-foreground">
              Helpful reviews get upvoted and featured by the community
            </p>
            <p className="text-xs text-muted-foreground">
              Top reviewers get special badges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDorm;
