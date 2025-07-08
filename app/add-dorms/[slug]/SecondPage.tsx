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
import { Button } from "@/components/ui/button";

const AddDorms = () => {
  const [cleanliness, setCleanliness] = useState(0);
  const [noiseLevel, setNoiseLevel] = useState(0);
  const [location, setLocation] = useState(0);
  const [amenities, setAmenities] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [anonymous, setAnonymous] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className=" py-10 px-5 ">
      <div className="flex justify-center items-center text-center flex-col gap-2">
        <h1 className="text-3xl font-bold">Write a Dorm Review</h1>
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
                <Select>
                  <SelectTrigger className="w-[210px] py-4.5 text-sm ">
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2 justify-center">
                <LabelForm>Year Lived *</LabelForm>
                <Select>
                  <SelectTrigger className="w-[210px] py-4.5 text-sm text-black">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col ">
                <div className="flex flex-col gap-2 justify-center">
                  <LabelForm>Semester *</LabelForm>
                  <Select>
                    <SelectTrigger className="w-[210px] py-4.5 text-sm text-black">
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <label className="flex flex-col items-center cursor-pointer mt-5 py-20 max-w-md mx-auto w-full border border-dashed border-gray-300 rounded-md gap-2">
              <Input type="file" hidden multiple />
              <UploadIcon size={25} />
              <p className="text-base">Upload Photos</p>
            </label>
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
                  <Rating
                    onClick={(value) => setCleanliness(value)}
                    SVGstyle={{
                      display: "inline-block",
                    }}
                    size={30}
                  />
                  <p className="mt-1 text-gray-500 text-sm">
                    {" "}
                    {cleanliness === 0 ? "Not Rated" : `${cleanliness}/5`}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <LabelForm>Noise Level *</LabelForm>
                <div className="flex items-center gap-2">
                  <Rating
                    onClick={(value) => setNoiseLevel(value)}
                    SVGstyle={{
                      display: "inline-block",
                    }}
                    size={30}
                  />
                  <p className="mt-1 text-gray-500 text-sm">
                    {" "}
                    {noiseLevel === 0 ? "Not Rated" : `${noiseLevel}/5`}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <LabelForm>Location *</LabelForm>
                <div className="flex items-center gap-2">
                  <Rating
                    onClick={(value) => setLocation(value)}
                    SVGstyle={{
                      display: "inline-block",
                    }}
                    size={30}
                  />
                  <p className="mt-1 text-gray-500 text-sm">
                    {" "}
                    {location === 0 ? "Not Rated" : `${location}/5`}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <LabelForm>Amenities *</LabelForm>
                <div className="flex items-center gap-2">
                  <Rating
                    onClick={(value) => setAmenities(value)}
                    SVGstyle={{
                      display: "inline-block",
                    }}
                    size={30}
                  />
                  <p className="mt-1 text-gray-500 text-sm">
                    {" "}
                    {amenities === 0 ? "Not Rated" : `${amenities}/5`}
                  </p>
                </div>
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
                className="py-5 text-sm"
                type="text"
                placeholder="Summarize your experience in a few words "
              />
            </div>

            <div className="flex flex-col gap-2">
              <LabelForm>Review Title *</LabelForm>
              <Textarea
                className=" text-sm h-[150px]"
                placeholder="Share your detailed experience living in this dorm. Include information about the room, the people you lived with, and the overall experience. "
              />
            </div>

            <div className="flex justify-between items-center gap-5">
              <div className="flex flex-col gap-2 flex-1">
                <LabelForm>What did you like most? *</LabelForm>
                <Textarea
                  className=" text-sm  h-[80px]"
                  placeholder="List the positive aspects.  "
                />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <LabelForm>What could be improved? *</LabelForm>
                <Textarea
                  className=" text-sm h-[80px]"
                  placeholder="List the areas for improvement.  "
                />
              </div>
            </div>

            <div>
              <LabelForm>Would you recommend this dorm? *</LabelForm>
              <RadioGroup className="py-5 " defaultValue="yes">
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    className="border-black cursor-pointer"
                    value="yes"
                    id="r1"
                  />
                  <Label htmlFor="r1">Yes, I would recommend it</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    className="border-black cursor-pointer"
                    value="no"
                    id="r2"
                  />
                  <Label htmlFor="r2">No, I would not recommend it</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    className="border-black cursor-pointer"
                    value="maybe"
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
                <Input type="text" placeholder="Enter your name" />
              </div>

              <div className="flex  w-full flex-col gap-2">
                <LabelForm>Class Year</LabelForm>
                <Select>
                  <SelectTrigger className="w-full py-4.5 text-sm text-black">
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AddDorms;
