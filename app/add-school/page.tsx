import BackToHome from "@/components/BackToHome";
import React from "react";
import { Building } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AddSchool = () => {
  return (
    <div className="max-w-3xl mx-auto my-10 ">
      <div className="text-center flex flex-col gap-2 ">
        <h1 className="text-2xl font-semibold">Add New School</h1>
        <p className="text-muted-foreground">
          Help expand our database by adding a new university or college
        </p>
      </div>
      <div className="my-7">
        <BackToHome />
      </div>
      <div>
        <Card className="w-full gap-1 ">
          <CardHeader>
            <CardTitle className="flex items-center text-xl gap-2">
              {" "}
              <Building className="text-gray-600" size={20} /> School
              Information{" "}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="flex flex-col gap-2 my-2">
                <label className="px-2 text-sm" htmlFor="school-name">
                  School Name
                </label>
                <Input
                  className="py-5"
                  id="school-name"
                  placeholder="Enter school name"
                />
              </div>
            ))}
          </CardContent>
          <CardContent>
            <div className="flex flex-col gap-2 my-5">
              <label className="px-2 text-sm" htmlFor="school-name">
                Official Website
              </label>
              <Input
                className="py-5"
                id="school-name"
                placeholder="Enter school name"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-3">
            <Button
              variant={"outline"}
              className="text-sm cursor-pointer  flex-1/4 "
            >
              Cancel
            </Button>
            <Button className="text-sm flex-1/2 cursor-pointer">Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AddSchool;
