"use client";
import BackToHome from "@/components/BackToHome";
import React, { useState } from "react";
import { Building } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

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
import Image from "next/image";
import { Trash } from "lucide-react";

const AddSchool = () => {
  const [picture, setPicture] = useState<File | null>(null);

  const handleDeletePicture = () => {
    setPicture(null);
  };

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
            <div className="flex flex-col gap-2 my-2">
              <label className="px-2 text-sm" htmlFor="school-name">
                Full School Name *
              </label>
              <Input
                className="py-5"
                id="school-name"
                placeholder="e.g., Harvard University"
              />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label className="px-2 text-sm" htmlFor="school-name">
                Short Name/Abbreviation
              </label>
              <Input
                className="py-5"
                id="school-name"
                placeholder="e.g., Harvard"
              />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label className="px-2 text-sm" htmlFor="school-name">
                City *
              </label>
              <Input
                className="py-5"
                id="school-name"
                placeholder="e.g., Cambridge"
              />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label className="px-2 text-sm" htmlFor="school-name">
                State *
              </label>
              <Input
                className="py-5"
                id="school-name"
                placeholder="e.g., Massachusetts"
              />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label className="px-2 text-sm" htmlFor="school-name">
                School Type *
              </label>
              <Input
                className="py-5"
                id="school-name"
                placeholder="e.g., Public"
              />
            </div>
            <div className="flex flex-col gap-2 my-2">
              <label className="px-2 text-sm" htmlFor="school-name">
                Are dorms nearby?
              </label>
              <Input
                className="py-5"
                id="school-name"
                placeholder="e.g., Yes"
              />
            </div>
          </CardContent>
          <CardContent>
            <div className="flex flex-col gap-2 my-5">
              <label className="px-2 text-sm" htmlFor="school-name">
                Official Website
              </label>
              <Input
                className="py-5"
                id="school-name"
                placeholder="e.g., https://www.harvard.edu"
              />
            </div>
            <div className="">
              {picture ? (
                <div className="flex items-center justify-center py-5 ">
                  <div className="relative">
                    <Image
                      className="rounded-lg h-70 w-xl object-cover "
                      src={URL.createObjectURL(picture)}
                      alt="Picture"
                      width={100}
                      height={100}
                    />
                    <Trash
                      className="text-red-500 absolute top-5 -translate-y-1/2 right-2 cursor-pointer"
                      onClick={handleDeletePicture}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <label className="flex flex-col items-center cursor-pointer gap-2 border border-dashed border-gray-300 rounded-md py-15">
                    <Input
                      className="hidden"
                      multiple={false}
                      type="file"
                      onChange={(e) => setPicture(e.target.files?.[0] ?? null)}
                    />
                    <Upload className="text-gray-600" size={30} />
                    <p className="text-md">Upload Picture (Optional)</p>
                  </label>
                </>
              )}
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
