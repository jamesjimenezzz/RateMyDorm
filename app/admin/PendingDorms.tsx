import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Dorm } from "@prisma/client";
import React from "react";

interface Props {
  dorm: Dorm;
}

const PendingDorms = ({ dorm }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{dorm.name}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default PendingDorms;
