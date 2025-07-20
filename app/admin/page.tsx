"use client";
import React, { useState } from "react";
import AdminPendingSchools from "./AdminPendingSchools";
import AdminPendingReviews from "./AdminPendingReviews";
import AdminPendingDorms from "./AdminPendingDorms";

const AdminPage = () => {
  const [page, setPage] = useState<number>(0);

  const fetchPages = [
    <AdminPendingSchools key={0} />,
    <AdminPendingDorms key={1} />,
    <AdminPendingReviews key={2} />,
  ];

  const contentPage = fetchPages[page];

  return (
    <div className=" max-w-[1400px] mx-auto">
      <div className=" flex  items-center font-bold text-lg mx-5 justify-between my-10">
        <div>
          <h1 onClick={() => setPage(0)} className="cursor-pointer">
            School Pending Requests
          </h1>
        </div>
        <div>
          <h1 onClick={() => setPage(1)} className="cursor-pointer">
            Dorm Pending Requests
          </h1>
        </div>
        <div>
          <h1 onClick={() => setPage(2)} className="cursor-pointer">
            Review Pending Requests
          </h1>
        </div>
      </div>
      {contentPage}
    </div>
  );
};

export default AdminPage;
