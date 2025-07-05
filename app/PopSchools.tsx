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
import testpic from "@/public/testpic.jpg";
import { Button } from "@/components/ui/button";

const PopSchools = () => {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Popular Schools</h1>
        <p className="text-muted-foreground">
          Explore the most reviewed universities on our platform
        </p>
      </div>
      <div className="grid grid-cols-3 mt-10  gap-5">
        <Card className="p-0 gap-2 w-full   ">
          <CardHeader className="p-0 ">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={testpic}
              alt="testpic"
              width={300}
              height={200}
            />
          </CardHeader>
          <CardContent className="text-start flex flex-col gap-2 px-6 py-5">
            <CardTitle className="text-lg font-bold flex flex-col gap-1">
              <p>University of the Philippines</p>
              <p className="text-sm text-muted-foreground font-normal">
                Manila, Philippines
              </p>
            </CardTitle>

            <CardFooter className="p-0 flex justify-between">
              <p className="text-sm text-muted-foreground">433 reviews</p>
              <Button className="py-0">View</Button>
            </CardFooter>
          </CardContent>
        </Card>

        <Card className="p-0 gap-2   ">
          <CardHeader className="p-0">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={testpic}
              alt="testpic"
              width={300}
              height={200}
            />
          </CardHeader>
          <CardContent className="text-start flex flex-col gap-2 px-6 py-5">
            <CardTitle className="text-lg font-bold flex flex-col gap-1">
              <p>University of the Philippines</p>
              <p className="text-sm text-muted-foreground font-normal">
                Manila, Philippines
              </p>
            </CardTitle>

            <CardFooter className="p-0 flex justify-between">
              <p className="text-sm text-muted-foreground">433 reviews</p>
              <Button className="py-0">View</Button>
            </CardFooter>
          </CardContent>
        </Card>

        <Card className="p-0 gap-2   ">
          <CardHeader className="p-0">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={testpic}
              alt="testpic"
              width={300}
              height={200}
            />
          </CardHeader>
          <CardContent className="text-start flex flex-col gap-2 px-6 py-5">
            <CardTitle className="text-lg font-bold flex flex-col gap-1">
              <p>University of the Philippines</p>
              <p className="text-sm text-muted-foreground font-normal">
                Manila, Philippines
              </p>
            </CardTitle>

            <CardFooter className="p-0 flex justify-between">
              <p className="text-sm text-muted-foreground">433 reviews</p>
              <Button className="py-0">View</Button>
            </CardFooter>
          </CardContent>
        </Card>

        <Card className="p-0 gap-2 w-full   ">
          <CardHeader className="p-0 ">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={testpic}
              alt="testpic"
              width={300}
              height={200}
            />
          </CardHeader>
          <CardContent className="text-start flex flex-col gap-2 px-6 py-5">
            <CardTitle className="text-lg font-bold flex flex-col gap-1">
              <p>University of the Philippines</p>
              <p className="text-sm text-muted-foreground font-normal">
                Manila, Philippines
              </p>
            </CardTitle>

            <CardFooter className="p-0 flex justify-between">
              <p className="text-sm text-muted-foreground">433 reviews</p>
              <Button className="py-0">View</Button>
            </CardFooter>
          </CardContent>
        </Card>

        <Card className="p-0 gap-2   ">
          <CardHeader className="p-0">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={testpic}
              alt="testpic"
              width={300}
              height={200}
            />
          </CardHeader>
          <CardContent className="text-start flex flex-col gap-2 px-6 py-5">
            <CardTitle className="text-lg font-bold flex flex-col gap-1">
              <p>University of the Philippines</p>
              <p className="text-sm text-muted-foreground font-normal">
                Manila, Philippines
              </p>
            </CardTitle>

            <CardFooter className="p-0 flex justify-between">
              <p className="text-sm text-muted-foreground">433 reviews</p>
              <Button className="py-0">View</Button>
            </CardFooter>
          </CardContent>
        </Card>

        <Card className="p-0 gap-2   ">
          <CardHeader className="p-0">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={testpic}
              alt="testpic"
              width={300}
              height={200}
            />
          </CardHeader>
          <CardContent className="text-start flex flex-col gap-2 px-6 py-5">
            <CardTitle className="text-lg font-bold flex flex-col gap-1">
              <p>University of the Philippines</p>
              <p className="text-sm text-muted-foreground font-normal">
                Manila, Philippines
              </p>
            </CardTitle>

            <CardFooter className="p-0 flex justify-between">
              <p className="text-sm text-muted-foreground">433 reviews</p>
              <Button className="py-0">View</Button>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button className="bg-gray-700 p-5.5 cursor-pointer text-base">
          View All Schools
        </Button>
      </div>
    </div>
  );
};

export default PopSchools;
