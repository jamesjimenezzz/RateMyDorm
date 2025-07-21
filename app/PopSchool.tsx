import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Dorm, Review, School } from "@prisma/client";
import Image from "next/image";
import placeholder from "@/public/placeholder.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PopSchool = ({
  school,
}: {
  school: School & { dorms: (Dorm & { reviews: Review[] })[] };
}) => {
  return (
    <>
      <Card className=" p-2 pb-5 gap-0 hover:scale-105 transition-all duration-300 cursor-pointer    ">
        <CardHeader className="p-0  ">
          <Image
            className="h-48 w-full object-cover rounded-md"
            src={school.picture[0] || placeholder}
            alt="ateneo"
            width={300}
            height={200}
          />
        </CardHeader>
        <CardContent className="text-start flex flex-col gap-8 px-6 py-5 pb-5">
          <CardTitle className="text-lg font-bold flex flex-col ">
            <p>{school.name}</p>
            <p className="text-sm text-muted-foreground font-normal">
              {school.state}, {school.city}
            </p>
          </CardTitle>

          <CardFooter className="p-0  flex justify-between">
            <div className="flex flex-col gap-1 text-sm text-gray-500 font-semibold">
              <p className="">{school.dorms.length} Total Dorms Available</p>
              <p>
                {school.dorms.reduce(
                  (acc, dorm) => acc + dorm.reviews.length,
                  0
                )}{" "}
                Total Reviews
              </p>
            </div>
            <Link className="" href={`/dorms/${school.slug}`}>
              <Button className="h-8 px-10 text-sm cursor-pointer">View</Button>
            </Link>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
};

export default PopSchool;
