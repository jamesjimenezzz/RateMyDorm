import { School } from "@prisma/client";
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
import { Check } from "lucide-react";
import { Trash } from "lucide-react";
import { useUpdateSchools } from "@/hooks/useSchool";

interface Props {
  school: School;
}

const PendingSchool = ({ school }: Props) => {
  const { mutate, isPending } = useUpdateSchools();

  return (
    <Card className={`max-w-md ${isPending ? "opacity-50" : ""}`}>
      <CardContent className="flex  justify-between">
        <div className="flex flex-col">
          <div className="">
            <h1 className=" font-bold">
              {school.name} ({school.shortName})
            </h1>
            <div className="text-sm text-gray-500 flex gap-5">
              <p className="">
                {school.city}, {school.state}
              </p>
              <p>{school.schoolType}</p>
            </div>
          </div>

          <div className="flex flex-col my-4 flex-1 text-sm text-gray-500">
            <p>Dorms nearby: {school.dormsNearby}</p>
            <p>{school.website || "No website"}</p>
          </div>

          <div className="flex gap-3">
            <Trash size={20} />
            <Check
              className="cursor-pointer"
              onClick={() => mutate(school.id)}
              size={20}
            />
          </div>
        </div>
        <div className="max-w-[150px]">
          <Image
            className="object-cover rounded-lg w-full "
            alt={`Picture of ${school.name}`}
            src={school.picture[0]}
            height={300}
            width={300}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PendingSchool;
