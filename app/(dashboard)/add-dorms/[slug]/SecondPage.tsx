"use client";
import React, { useEffect, useState } from "react";
import BackToHome from "@/components/BackToHome";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UploadIcon } from "lucide-react";
import { Rating } from "react-simple-star-rating";
import { Textarea } from "@/components/ui/textarea";
import LabelForm from "@/components/LabelForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { useFormContext, Controller } from "react-hook-form";

const AddDorms = ({ dormName }: { dormName: string | undefined }) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

  const {
    register,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [isMounted, setIsMounted] = useState(false);
  const [anonymous, setAnonymous] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const photosFromRhf = (watch("photos") as File[]) || undefined;
    if (photosFromRhf?.length > 0) {
      setPicture(photosFromRhf);
    }
  }, [watch]);

  const [picture, setPicture] = useState<File[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const updated = [...picture, ...selectedFiles];
    setPicture(updated);
    setValue("photos", updated, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <div className=" py-10 px-5 ">
      <div className="flex justify-center items-center text-center flex-col gap-2">
        <h1 className="text-3xl font-bold">
          Write a Dorm Review {dormName ? `to ${dormName}` : ""}
        </h1>
        <p className="text-muted-foreground text-lg">
          Share your experience at Boston University
        </p>
      </div>
      <div className="pt-10">
        <BackToHome />
      </div>
      <div className="grid gap-12">
        <Card className="">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Dorm Information
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 justify-center">
                <LabelForm>Room Type *</LabelForm>
                <Controller
                  control={control}
                  name="roomType"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[210px] py-4.5 text-sm ">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Single">Single</SelectItem>
                          <SelectItem value="Double">Double</SelectItem>
                          <SelectItem value="Triple">Triple</SelectItem>
                          <SelectItem value="Suite">Suite</SelectItem>
                          <SelectItem value="Studio">Studio</SelectItem>
                          <SelectItem value="ApartmentStyle">
                            Apartment Style
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="flex flex-col gap-2 justify-center">
                <LabelForm>Year Lived *</LabelForm>
                <Controller
                  control={control}
                  name="yearLived"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[210px] py-4.5 text-sm text-black">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Freshman">Freshman</SelectItem>
                          <SelectItem value="Sophomore">Sophomore</SelectItem>
                          <SelectItem value="Junior">Junior</SelectItem>
                          <SelectItem value="Senior">Senior</SelectItem>
                          <SelectItem value="Graduate">Graduate</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="flex flex-col ">
                <div className="flex flex-col gap-2 justify-center">
                  <LabelForm>Semester *</LabelForm>
                  <Controller
                    control={control}
                    name="semester"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-[210px] py-4.5 text-sm text-black">
                          <SelectValue placeholder="Select semester" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Fall">Fall</SelectItem>
                            <SelectItem value="Spring">Spring</SelectItem>
                            <SelectItem value="Summer">Summer</SelectItem>
                            <SelectItem value="FullYear">Full Year</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-evenly py-3">
              {errors.roomType && (
                <p className="text-red-500 text-sm">
                  {errors.roomType.message as string}
                </p>
              )}

              {errors.yearLived && (
                <p className="text-red-500 text-sm">
                  {errors.yearLived.message as string}
                </p>
              )}

              {errors.semester && (
                <p className="text-red-500 text-sm">
                  {errors.semester.message as string}
                </p>
              )}
            </div>

            <div className="flex items-center justify-around"></div>

            {picture.length > 0 ? (
              <div
                className={`${
                  picture.length > 3
                    ? "grid grid-cols-3"
                    : "flex items-center justify-evenly"
                }`}
              >
                {picture.map((pic, i) => (
                  <Image
                    key={i}
                    className="rounded-lg max-h-55 max-w-[220px]  object-cover "
                    src={URL.createObjectURL(pic)}
                    alt="picture"
                    width={500}
                    height={500}
                  />
                ))}
              </div>
            ) : (
              <>
                <label className="flex flex-col items-center cursor-pointer mt-5 py-20 max-w-md mx-auto w-full border border-dashed border-gray-300 rounded-md gap-2">
                  <Input
                    multiple
                    onChange={handleOnChange}
                    type="file"
                    hidden
                  />
                  <UploadIcon size={25} />
                  <p className="text-base">Upload Photos</p>
                </label>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-2xl">
              Rate Your Experirence
            </CardTitle>
          </CardHeader>
          {isMounted && (
            <CardContent className="grid grid-cols-2 gap-4 ">
              <div className="flex flex-col gap-2">
                <LabelForm>Cleanliness *</LabelForm>
                <div className="flex items-center gap-2">
                  <Controller
                    control={control}
                    name="cleanliness"
                    render={({ field }) => (
                      <>
                        <Rating
                          onClick={(value) => {
                            field.onChange(value);
                          }}
                          SVGstyle={{
                            display: "inline-block",
                          }}
                          size={30}
                          initialValue={field.value || 0}
                        />

                        <p className="mt-1 text-gray-500 text-sm">
                          {" "}
                          {field.value === 0 ? "Not Rated" : `${field.value}/5`}
                        </p>
                      </>
                    )}
                  />
                </div>

                {errors.cleanliness && (
                  <p className="text-red-500 text-sm">
                    {errors.cleanliness.message as string}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <LabelForm>Noise Level *</LabelForm>
                <div className="flex items-center gap-2">
                  <Controller
                    control={control}
                    name="noiseLevel"
                    render={({ field }) => (
                      <>
                        <Rating
                          onClick={(value) => {
                            field.onChange(value);
                          }}
                          SVGstyle={{
                            display: "inline-block",
                          }}
                          initialValue={field.value || 0}
                          size={30}
                        />
                        <p className="mt-1 text-gray-500 text-sm">
                          {" "}
                          {field.value === 0 ? "Not Rated" : `${field.value}/5`}
                        </p>
                      </>
                    )}
                  />
                </div>
                {errors.noiseLevel && (
                  <p className="text-red-500 text-sm">
                    {errors.noiseLevel.message as string}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <LabelForm>Location *</LabelForm>
                <div className="flex items-center gap-2">
                  <Controller
                    control={control}
                    name="location"
                    render={({ field }) => (
                      <>
                        <Rating
                          onClick={(value) => {
                            field.onChange(value);
                          }}
                          SVGstyle={{
                            display: "inline-block",
                          }}
                          size={30}
                          initialValue={field.value || 0}
                        />

                        <p className="mt-1 text-gray-500 text-sm">
                          {" "}
                          {field.value === 0 ? "Not Rated" : `${field.value}/5`}
                        </p>
                      </>
                    )}
                  />
                </div>
                {errors.location && (
                  <p className="text-red-500 text-sm">
                    {errors.location.message as string}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <LabelForm>Amenities *</LabelForm>
                <div className="flex items-center gap-2">
                  <Controller
                    control={control}
                    name="amenities"
                    render={({ field }) => (
                      <>
                        <Rating
                          onClick={(value) => {
                            field.onChange(value);
                          }}
                          SVGstyle={{
                            display: "inline-block",
                          }}
                          size={30}
                          initialValue={field.value || 0}
                        />
                        <p className="mt-1 text-gray-500 text-sm">
                          {" "}
                          {field.value === 0 ? "Not Rated" : `${field.value}/5`}
                        </p>
                      </>
                    )}
                  />
                </div>
                {errors.amenities && (
                  <p className="text-red-500 text-sm">
                    {errors.amenities.message as string}
                  </p>
                )}
              </div>
            </CardContent>
          )}
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Your Review</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <LabelForm>Review Title *</LabelForm>
              <Input
                {...register("reviewTitle")}
                className="py-5 text-sm"
                type="text"
                placeholder="Summarize your experience in a few words "
              />
              {errors.reviewTitle && (
                <p className="text-red-500 text-sm">
                  {errors.reviewTitle.message as string}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <LabelForm>Review Title *</LabelForm>
              <Textarea
                {...register("detailedReview")}
                className=" text-sm h-[150px]"
                placeholder="Share your detailed experience living in this dorm. Include information about the room, the people you lived with, and the overall experience. "
              />
              {errors.detailedReview && (
                <p className="text-red-500 text-sm">
                  {errors.detailedReview.message as string}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center gap-5">
              <div className="flex flex-col gap-2 flex-1">
                <LabelForm>What did you like most? *</LabelForm>
                <Textarea
                  className=" text-sm  h-[80px]"
                  placeholder="List the positive aspects.  "
                  {...register("likeMost")}
                />
                {errors.likeMost && (
                  <p className="text-red-500 text-sm">
                    {errors.likeMost.message as string}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <LabelForm>What could be improved? *</LabelForm>
                <Textarea
                  className=" text-sm h-[80px]"
                  placeholder="List the areas for improvement.  "
                  {...register("improve")}
                />
                {errors.improve && (
                  <p className="text-red-500 text-sm">
                    {errors.improve.message as string}
                  </p>
                )}
              </div>
            </div>

            <div>
              <LabelForm>Would you recommend this dorm? *</LabelForm>
              <RadioGroup
                className="py-5 "
                defaultValue="Yes"
                {...register("recommendDorm")}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    className="border-black cursor-pointer"
                    value="Yes"
                    id="r1"
                  />
                  <Label htmlFor="r1">Yes, I would recommend it</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    className="border-black cursor-pointer"
                    value="No"
                    id="r2"
                  />
                  <Label htmlFor="r2">No, I would not recommend it</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    className="border-black cursor-pointer"
                    value="Maybe"
                    id="r3"
                  />
                  <Label htmlFor="r3">Maybe, I would recommend it</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">About You</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <input
              {...register("isAnonymous")}
              checked={anonymous}
              onChange={() => setAnonymous(!anonymous)}
              className="cursor-pointer w-4 h-4"
              type="checkbox"
            />
            <Label className="text-sm">Post anonymously</Label>
          </CardContent>
          {!anonymous && (
            <CardContent className="flex justify-between w-full gap-5">
              <div className="flex flex-col w-full gap-2">
                <LabelForm>Your Name</LabelForm>
                <Input
                  {...register("userName")}
                  type="text"
                  placeholder="Enter your name"
                />
                {errors.userName && (
                  <p className="text-red-500 text-sm">
                    {errors.userName.message as string}
                  </p>
                )}
              </div>

              <div className="flex  w-full flex-col gap-2">
                <LabelForm>Class Year</LabelForm>
                <Controller
                  control={control}
                  name="classYear"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full py-4.5 text-sm text-black">
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Freshman">Freshman</SelectItem>
                          <SelectItem value="Sophomore">Sophomore</SelectItem>
                          <SelectItem value="Junior">Junior</SelectItem>
                          <SelectItem value="Senior">Senior</SelectItem>
                          <SelectItem value="Graduate">Graduate</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AddDorms;
