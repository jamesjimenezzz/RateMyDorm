import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import placeholder from "@/public/placeholder.svg";

const PopDorms = () => {
  return (
    <div className="my-15 w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Popular Dorms</h1>
        <p className="text-muted-foreground">
          Explore the most reviewed dorms on our platform
        </p>
      </div>
      <div className="flex gap-5 mt-10 overflow-x-auto whitespace-nowrap">
        {Array.from({ length: 10 }, (_, index) => (
          <Card
            key={index}
            className="p-0  pb-5 border-none  gap-1.5 min-w-[240px] rounded-lg"
          >
            <div className="w-full h-60   rounded-lg">
              <Image
                className="w-full rounded-lg h-full object-cover"
                src={placeholder}
                alt="testpic"
                width={350}
                height={200}
              />
            </div>
            <CardContent className="px-1 border-none py-0 flex flex-col gap-1.5 text-start">
              <div className="flex flex-col gap-0.5">
                <CardTitle className="text-lg">Mapua Dormitory</CardTitle>
                <CardDescription className="text-black">
                  <p>Mapua University</p>
                </CardDescription>
              </div>

              <CardDescription>
                <p>Mapua University</p>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopDorms;
