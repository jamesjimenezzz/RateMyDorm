"use client";
import BackToHome from "@/components/BackToHome";
import React, { useState, useEffect } from "react";
import { MapPin, Star } from "lucide-react";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import placeholder from "@/public/placeholder.svg";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";

const DormPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="pb-12 ">
      <div className="pt-10 ">
        <BackToHome />
      </div>
      <div className="grid grid-cols-2 items-center pb-5 gap-8">
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-5">
            <h1 className="text-4xl font-bold">Boston University</h1>
            <span className="flex items-center bg-gray-100 rounded-xl px-2.5 py-1 gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={15} />
              <p className="text-xs font-semibold">4.5</p>
            </span>
          </div>
          <p className="text-muted-foreground flex items-center gap-2">
            <span>
              <MapPin size={16} />
            </span>{" "}
            Boston, MA
          </p>
          <p className="text-gray-600 text-lg mb-2">
            Boston University is a leading private research university with two
            primary campuses in the heart of Boston.
          </p>
          <div className="flex items-center  gap-6 mb-2 ">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Amenities</p>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div className="px-2 py-1 outline text-xs bg-gray-100 rounded-lg">
                    <p className="font-[500]">Dining Hall</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <Button className="cursor-pointer px-6 py-5">Write Review</Button>
            <Button className="cursor-pointer px-6 py-5" variant={"outline"}>
              Read Reviews
            </Button>
          </div>
        </div>
        <div className="h-80 w-full">
          <Image
            className="h-full w-full object-cover rounded-lg"
            src={placeholder}
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
