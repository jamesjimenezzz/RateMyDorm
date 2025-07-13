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
import placeholder2 from "@/public/placeholder2.png";
import Dorms from "./Dorms";
import { School } from "@prisma/client";
import { Dorm } from "@prisma/client";

const HeroDorm = ({ school }: { school: School & { dorms: Dorm[] } }) => {
  return (
    <div className="bg-[#f9fafb] py-12 px-5 w-full">
      <div className=" max-w-7xl mx-auto">
        <div className="flex items-center justify-center flex-col gap-3">
          <h1 className="text-3xl font-semibold">
            Rate Dorms at{" "}
            <span className="text-gray-800 font-bold  border-gray-400 border-b-2">
              {school.name}
            </span>
          </h1>
          <p>
            Share your experience and read honest reviews from fellow students
          </p>
          <div className="text-muted-foreground flex gap-5">
            <p>{school.dorms.length} residence halls</p>
            <span>•</span>
            <p>168 total reviews</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 py-10">
          {school?.dorms?.length > 0 ? (
            school?.dorms?.map((dorm: Dorm) => (
              <Dorms key={dorm.id} dorm={dorm} />
            ))
          ) : (
            <div className="flex justify-center items-center h-full w-full">
              <p>No dorms found</p>
            </div>
          )}
        </div>
        {school.dorms.length > 6 && (
          <div className="flex justify-center pb-10 ">
            <Button
              variant={"outline"}
              className="cursor-pointer border-gray-400 text-gray-600 hover:border-gray-700 px-12"
            >
              See More
            </Button>
          </div>
        )}

        <div className="py-10 max-w-lg mx-auto hover:bg-gray-100 transition-all duration-300 hover:border-gray-600  border-2 border-gray-300 border-dashed  rounded-lg bg-white w-full">
          <Link href={`/add-dorms/${school.slug}`}>
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
