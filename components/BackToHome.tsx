import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";

const BackToHome = () => {
  return (
    <>
      <div className="">
        <Link href={"/"}>
          <p className="hover:underline flex items-center gap-1 mb-5 text-base">
            <ArrowLeft size={16} /> Back to Home
          </p>
        </Link>
      </div>
    </>
  );
};

export default BackToHome;
