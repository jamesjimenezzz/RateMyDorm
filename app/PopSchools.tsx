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
import ateneo from "@/public/ateneo.png";
import lasalle from "@/public/lasalle.jpg";
import upd from "@/public/upd.jpg";
import ust from "@/public/ust.jpg";
import slu from "@/public/slu.jpg";
import mapua from "@/public/mapua.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import placeholder from "@/public/placeholder.svg";

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
        <Card className="p-0 gap-0    ">
          <CardHeader className="p-0 ">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={placeholder}
              alt="ateneo"
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

        <Card className="p-0 gap-0   ">
          <CardHeader className="p-0">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={placeholder}
              alt="lasalle"
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

        <Card className="p-0 gap-0   ">
          <CardHeader className="p-0">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={placeholder}
              alt="upd"
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
              <p className="text-sm text-black">433 reviews</p>
              <Button className="py-0">View</Button>
            </CardFooter>
          </CardContent>
        </Card>

        <Card className="p-0 gap-0 w-full   ">
          <CardHeader className="p-0 ">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={placeholder}
              alt="ust"
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

        <Card className="p-0 gap-0   ">
          <CardHeader className="p-0">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={placeholder}
              alt="slu"
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

        <Card className="p-0 gap-0   ">
          <CardHeader className="p-0">
            <Image
              className="h-48 w-full object-cover rounded-md"
              src={placeholder}
              alt="mapua"
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
        <Link href="/all-schools">
          <Button className="bg-gray-700 p-5.5 cursor-pointer text-base">
            View All Schools
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PopSchools;
