"use client";
import React, { useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import { Button } from "@/components/ui/button";
const AddDormsPage = () => {
  const [page, setPage] = useState(0);

  const pages = [<FirstPage />, <SecondPage />];

  const displayPage = pages[page];

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  return (
    <div className="max-w-3xl overflow-hidden   mx-auto">
      {displayPage}
      <div
        className={`${
          page > 0 ? "flex px-5 gap-5 " : " "
        }text-start w-full pb-20`}
      >
        {page === 0 ? (
          <Button onClick={handleNext} className="px-15 h-9">
            Next
          </Button>
        ) : (
          <>
            <Button className="flex-1 ">Submit Review</Button>
            <Button variant={"outline"} onClick={handlePrevious} className="">
              Previous
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddDormsPage;
