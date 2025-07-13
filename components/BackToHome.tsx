import Link from "next/link";
import React from "react";
import { Home } from "lucide-react";

const BackToHome = () => {
  return (
    <>
      <div className="">
        <Link className="w-fit" href={"/"}>
          <p className="hover:underline font-[500] flex items-center gap-1.5 mb-5 text-sm">
            <Home size={16} /> Back to Home
          </p>
        </Link>
      </div>
    </>
  );
};

export default BackToHome;
