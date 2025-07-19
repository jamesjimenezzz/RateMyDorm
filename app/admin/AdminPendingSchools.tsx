"use client";
import React from "react";
import PendingSchool from "./PendingSchool";
import { useFetchPendingSchools, useUpdateSchools } from "@/hooks/useSchool";
import { School } from "@prisma/client";

const AdminPendingSchools = () => {
  const { data: pendingSchools, isLoading } = useFetchPendingSchools();

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
