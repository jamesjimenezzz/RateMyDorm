import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dorm, School } from "@prisma/client";
import React from "react";
import placeholder2 from "@/public/placeholder2.png";
import Image from "next/image";
import { Trash, Check } from "lucide-react";
import { useUpdatePendingDorms } from "@/hooks/useDorm";

interface Props {
  dorm: Dorm & { school: School };
}

const PendingDorms = ({ dorm }: Props) => {
  const { mutate, isPending } = useUpdatePendingDorms();

  return (
    <Card className={`max-w-md ${isPending ? "opacity-50" : ""}`}>
      <CardContent className="flex flex-col ">
        <div className="flex justify-between">
          <div className="flex-1">
            <h1 className="font-bold">{dorm.name}</h1>
            <p className="text-sm text-gray-500">{dorm.school.name}</p>
          </div>
          <div className="max-w-[150px] ">
            <Image
              src={placeholder2}
              alt="dorm"
              className="rounded-lg  object-cover "
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Trash size={20} />
          <Check
            className="cursor-pointer"
            size={20}
            onClick={() => mutate(dorm.id)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PendingDorms;
