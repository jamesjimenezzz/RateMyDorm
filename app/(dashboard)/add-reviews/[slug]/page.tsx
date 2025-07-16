"use client";
import React, { useState } from "react";
import AddDorms from "../../add-dorms/[slug]/SecondPage";
import { notFound, useParams, useRouter } from "next/navigation";
import { useFetchDorm } from "@/hooks/useDorm";
import { FormProvider, useForm } from "react-hook-form";
import { addReviewSchema, AddReviewSchemaType } from "@/lib/addReviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useReview } from "@/hooks/useReview";
import { uploadCloudinary } from "@/lib/uploadCloudinary";
import Spinner from "@/components/Spinner";

const AddReviews = () => {
  const [formKey, setFormKey] = useState(0);
  const { slug } = useParams();
  const { data: dorm, isFetching } = useFetchDorm(slug as string);
  const router = useRouter();

  if (isFetching) return <Spinner />;
  if (!dorm) {
    return notFound();
  }

  const form = useForm<AddReviewSchemaType>({
    resolver: zodResolver(addReviewSchema),
    mode: "onChange",
    defaultValues: {
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

  const { mutate, isPending } = useReview();

  const onSubmit = async (data: AddReviewSchemaType) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

    const files = (data.photos as File[]) || undefined;

    try {
      const uploadedUrls = files
        ? await uploadCloudinary({ files, cloudName, uploadPreset })
        : [];

      const finalData = { ...data, photos: uploadedUrls };
      mutate(
        { slug: slug as string, data: finalData },
        {
          onSuccess: () => {
            router.push(`/reviews/${dorm.school.slug}/${dorm.slug}`);
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <FormProvider {...form} key={formKey}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <AddDorms dormName={dorm?.name} />

          <div className="flex px-5">
            <Button type="submit" className="flex-1 " disabled={isPending}>
              Submit Review
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddReviews;
