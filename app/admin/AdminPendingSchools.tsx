"use client";
import React from "react";
import PendingSchool from "./PendingSchool";
import { useFetchPendingSchools } from "@/hooks/useSchool";
import { School } from "@prisma/client";

const AdminPendingSchools = () => {
  const { data: pendingSchools } = useFetchPendingSchools();

  return (
    <div>
      <h1 className="flex gap-2 my-5">
        Pending Requests:{" "}
        <span>{pendingSchools && pendingSchools?.length}</span>
      </h1>
      {pendingSchools?.map((school: School) => (
        <PendingSchool key={school.id} school={school} />
      ))}
    </div>
  );
};

export default AdminPendingSchools;
