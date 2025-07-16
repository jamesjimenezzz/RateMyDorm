import Link from "next/link";
import React from "react";
import { ChevronLeft } from "lucide-react";

interface Props {
  dormSchool: string;
  schoolSlug: string;
}

const BackToSpecificSchool = ({ dormSchool, schoolSlug }: Props) => {
  return (
    <>
      <div className="">
        <Link className="w-fit" href={`/dorms/${schoolSlug}`}>
          <p className="hover:underline font-[500] flex items-center gap-1.5 mb-5 text-sm">
            <ChevronLeft size={16} /> Back to {dormSchool}
          </p>
        </Link>
      </div>
    </>
  );
};

export default BackToSpecificSchool;
