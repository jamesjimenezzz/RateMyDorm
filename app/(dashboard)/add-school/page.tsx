"use client";
import BackToHome from "@/components/BackToHome";
import React, { useState } from "react";
import { Building } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { addSchoolSchema, AddSchoolSchemaType } from "@/lib/addSchoolSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { uploadCloudinary } from "@/lib/uploadCloudinary";
import { useAddSchool } from "@/hooks/useSchool";

const AddSchool = () => {
  const [picture, setPicture] = useState<File | string | null>(null);
  const { mutate, isPending } = useAddSchool();

  const handleDeletePicture = () => {
    setPicture(null);
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddSchoolSchemaType>({
    resolver: zodResolver(addSchoolSchema),
  });

  const onSubmit = async (data: AddSchoolSchemaType) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

    if (data.picture) {
      const formData = new FormData();
      formData.append("file", data.picture);
      formData.append("upload_preset", uploadPreset);
      formData.append("cloud_name", cloudName);

      try {
        const uploadedUrl = await uploadCloudinary({
          files: [data.picture],
          cloudName,
          uploadPreset,
        });

        setValue("picture", uploadedUrl[0]);

        const finalPayLoad = {
          ...data,
          picture: uploadedUrl,
        };

        mutate(finalPayLoad);
        reset();
        setPicture(null);
      } catch (error) {
        console.log(error);
      }
    }

    reset();
    setPicture(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setPicture(file);
      setValue("picture", file);
    }
  };

  return (
    <div className="max-w-3xl px-5 mx-auto my-10 ">
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label className="px-2 text-sm" htmlFor="school-name">
                  Short Name/Abbreviation
                </label>
                <Input
                  className="py-5"
                  id="school-name"
                  placeholder="e.g., Harvard"
                  {...register("shortName")}
                />
                {errors.shortName && (
                  <p className="text-red-500 text-sm">
                    {errors.shortName.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label className="px-2 text-sm" htmlFor="school-name">
                  City *
                </label>
                <Input
                  className="py-5"
                  id="school-name"
                  placeholder="e.g., Cambridge"
                  {...register("city")}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label className="px-2 text-sm" htmlFor="school-name">
                  State *
                </label>
                <Input
                  className="py-5"
                  id="school-name"
                  placeholder="e.g., Massachusetts"
                  {...register("state")}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label className="px-2 text-sm" htmlFor="school-name">
                  School Type *
                </label>
                <Input
                  className="py-5"
                  id="school-name"
                  placeholder="e.g., Public"
                  {...register("schoolType")}
                />
                {errors.schoolType && (
                  <p className="text-red-500 text-sm">
                    {errors.schoolType.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label className="px-2 text-sm" htmlFor="school-name">
                  Are dorms nearby?
                </label>
                <Input
                  className="py-5"
                  id="school-name"
                  placeholder="e.g., Yes"
                  {...register("dormsNearby")}
                />
                {errors.dormsNearby && (
                  <p className="text-red-500 text-sm">
                    {errors.dormsNearby.message}
                  </p>
                )}
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
                  {...register("website")}
                />
                {errors.website && (
                  <p className="text-red-500 text-sm">
                    {errors.website.message}
                  </p>
                )}
              </div>
              <div className="">
                {picture ? (
                  <div className="flex items-center justify-center py-5 ">
                    <div className="relative">
                      <Image
                        className="rounded-lg h-70 w-xl object-cover "
                        src={
                          typeof picture === "string"
                            ? picture
                            : URL.createObjectURL(picture)
                        }
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
                        accept="image/*"
                        type="file"
                        onChange={handleChange}
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
              <Button
                disabled={isSubmitting}
                type="submit"
                className="text-sm flex-1/2 cursor-pointer"
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default AddSchool;
