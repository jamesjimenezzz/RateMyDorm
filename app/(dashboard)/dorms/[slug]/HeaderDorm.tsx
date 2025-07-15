"use client";
import BackToHome from "@/components/BackToHome";
import React, { useState, useEffect } from "react";
import { MapPin, Star } from "lucide-react";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import placeholder from "@/public/placeholder.svg";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { useFetchSchool } from "@/hooks/useSchool";
import { useParams } from "next/navigation";
import { Dorm, Review, School } from "@prisma/client";
import BackToAllSchools from "@/components/BackToAllSchools";

const DormPage = ({
  school,
}: {
  school: School & { dorms: (Dorm & { reviews: Review[] })[] };
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="pb-12">
      <div className="pt-10 ">
        <BackToAllSchools />
      </div>
      <div className="grid grid-cols-2 items-center pb-5 gap-8">
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-5">
            <h1 className="text-4xl font-bold">{school?.name}</h1>
            <span className="flex items-center bg-gray-100 rounded-xl px-2.5 py-1 gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={15} />
              <p className="text-xs font-semibold">4.5</p>
            </span>
          </div>
          <p className="text-muted-foreground flex items-center gap-2">
            <span>
              <MapPin size={16} />
            </span>{" "}
            {school.city}, {school.state}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            Boston University is a leading private research university with two
            primary campuses in the heart of Boston.
          </p>
          <div className="flex items-center  gap-6 mb-2 ">
            <p className="text-gray-700 font-[500]  flex items-center gap-2">
              <span>
                <Users className="text-gray-600" size={20} />
              </span>{" "}
              {school.dorms.reduce((acc, dorm) => acc + dorm.reviews.length, 0)}{" "}
              Dorm Reviews Found
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <Button className="cursor-pointer px-6 py-5">View Dorms</Button>
            <Button className="cursor-pointer px-6 py-5" variant={"outline"}>
              Visit Website
            </Button>
          </div>
        </div>
        <div className="h-80 w-full">
          <Image
            className="h-full w-full object-cover rounded-lg"
            src={school?.picture[0] || placeholder}
            alt="dorm"
            width={800}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default DormPage;
