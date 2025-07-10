import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BackToHome from "@/components/BackToHome";
import LabelForm from "@/components/LabelForm";
import { useFormContext } from "react-hook-form";

const FirstPage = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="pt-20  items-center mx-auto overflow-hidden flex-1   justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold">Add Dorm Name</h1>
      </div>

      <div className="pt-5">
        <BackToHome />
      </div>

      <div className="flex flex-col  text-start">
        <h1 className="text-3xl font-bold">Add a dorm to Boston University</h1>
        <p className="text-muted-foreground text-base">
          Enter the name of the BU dorm you are reviewing.
        </p>
      </div>

      <div className="text-start pb-5 pt-10 flex flex-col gap-2">
        <LabelForm>Add Dorm</LabelForm>
        <Input
          {...register("dormName")}
          className="h-11"
          type="text"
          placeholder="Enter Dorm Name"
        />
        {errors.dormName && (
          <p className="text-red-500 text-sm">
            {errors.dormName.message as string}
          </p>
        )}
      </div>
    </div>
  );
};

export default FirstPage;
