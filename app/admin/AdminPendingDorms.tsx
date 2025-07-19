"use client";
import React from "react";
import PendingDorms from "./PendingDorms";
import { useFetchPendingDorms } from "@/hooks/AdminFetch";
import { Dorm } from "@prisma/client";

const AdminPendingDorms = () => {
  const { data: pendingDorms, isLoading } = useFetchPendingDorms();

  return (
    <div>
      <h1 className="flex gap-2 my-5">
        Pending Requests: <span>{pendingDorms && pendingDorms.length}</span>
      </h1>
      {pendingDorms?.map((dorm: Dorm) => (
        <PendingDorms key={dorm.id} dorm={dorm} />
      ))}
    </div>
  );
};

export default AdminPendingDorms;
