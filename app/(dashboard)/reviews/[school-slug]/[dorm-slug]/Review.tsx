import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Rating } from "react-simple-star-rating";

const Review = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <Card className="mb-7">
          <CardHeader>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Rating
                    SVGstyle={{
                      display: "inline-block",
                    }}
                    initialValue={4}
                    size={20}
                    readonly
                  />
                  <p className="font-semibold pt-0.5">4/5</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">2 weeks ago</p>
                </div>
              </div>

              <div>
                <h1 className="font-semibold">Classic dorm experience</h1>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base text-gray-500">
              If you want the traditional college dorm experience, Warren is
              perfect. Made so many friends here and the RAs are really helpful.
              The study rooms get busy during finals but overall great place to
              live.
            </p>
          </CardContent>
          <CardFooter className="  ">
            <div className="text-sm text-gray-500 flex justify-between items-center w-full border-t border-gray-300 pt-5">
              <div className="flex items-center gap-4 ">
                <p>Emma L.</p>
                <p>•</p>
                <p>Junior</p>
                <p>•</p>
                <p>Single</p>
                <p>•</p>
                <p>Fall 2022</p>
              </div>

              <div>15 Helpful votes</div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Review;
