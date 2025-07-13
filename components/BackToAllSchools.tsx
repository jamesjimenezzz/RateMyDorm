import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const BackToAllSchools = () => {
  return (
    <>
      <Link className="w-fit" href={"/all-schools"}>
        <p className="hover:underline font-[500] flex items-center gap-1.5 mb-5 text-base">
          <ChevronLeft size={16} /> All Schools
        </p>
      </Link>
    </>
  );
};

export default BackToAllSchools;
