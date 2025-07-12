"use client";
import React, { useState, useEffect } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import { Button } from "@/components/ui/button";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDormSchema, AddDormSchemaType } from "@/lib/addDormSchema";
import { uploadCloudinary } from "@/lib/uploadCloudinary";
import { FileSymlink } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { useFetchSchool } from "@/hooks/useSchool";
import { useAddDorm } from "@/hooks/useDorm";

const AddDormsPage = () => {
  const { slug } = useParams();
  const [page, setPage] = useState<number>(0);
  const { data: school } = useFetchSchool(slug as string);
  const { mutate } = useAddDorm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const pages = [<FirstPage school={school} />, <SecondPage />];

  const displayPage = pages[page];

  if (!school) {
    return notFound();
  }

  const handleNext = async () => {
    const isValid = await form.trigger(
      page === 0
        ? ["dormName"]
        : [
            "roomType",
            "yearLived",
            "semester",
            "photos",
            "cleanliness",
            "location",
            "noiseLevel",
            "amenities",
            "reviewTitle",
            "detailedReview",
            "likeMost",
            "improve",
            "recommendDorm",
            "isAnonymous",
            "userName",
            "classYear",
          ]
    );

    if (isValid) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setPage((prev) => prev - 1);
  };

  const form = useForm<AddDormSchemaType>({
    resolver: zodResolver(addDormSchema),
    mode: "onChange",
    defaultValues: {
      dormName: "",
      roomType: undefined,
      yearLived: undefined,
      semester: undefined,
      photos: undefined,
      cleanliness: 0,
      location: 0,
      noiseLevel: 0,
      amenities: 0,
      reviewTitle: "",
      detailedReview: "",
      likeMost: "",
      improve: "",
      recommendDorm: undefined,
      isAnonymous: false,
      userName: "",
      classYear: undefined,
    },
  });

  const onSubmit = async (data: AddDormSchemaType) => {
    setIsSubmitting(true);
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

    const files = (data.photos as File[]) || undefined;

    try {
      const uploadedUrls = files
        ? await uploadCloudinary({
            files,
            cloudName,
            uploadPreset,
          })
        : [];

      const finalPayLoad = {
        ...data,
        photos: uploadedUrls,
      };
      mutate({
        dorm: finalPayLoad,
        slug: slug as string,
      });
      form.reset();
      setPage(0);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-3xl overflow-hidden   mx-auto"
      >
        {displayPage}
        <div
          className={`${
            page > 0 ? "flex px-5 gap-5 " : " "
          }text-start w-full pb-20`}
        >
          {page === 0 ? (
            <button
              className="bg-black text-white px-15 h-9 text-sm rounded-lg"
              type="button"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <>
              <Button disabled={isSubmitting} type="submit" className="flex-1 ">
                Submit Review
              </Button>
              <Button
                disabled={isSubmitting}
                variant={"outline"}
                onClick={() => handlePrevious()}
                className=""
              >
                Previous
              </Button>
            </>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default AddDormsPage;
