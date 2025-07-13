import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  schoolName: string;
  dormName: string;
  schoolSlug: string;
  dormSlug: string;
}

const DormsBackToUniv = ({
  schoolName,
  dormName,
  schoolSlug,
  dormSlug,
}: Props) => {
  return (
    <div className="flex items-center gap-3">
      <Link href={`/dorms/${schoolSlug}`}>
        <p className="hover:underline font-[500] flex items-center gap-1.5 mb-5 text-sm">
          {schoolName} <ChevronRight size={16} />
        </p>
      </Link>

      <Link href={`/reviews/${schoolSlug}/${dormSlug}`}>
        <p className="hover:underline font-[500] flex items-center gap-1.5 mb-5 text-sm">
          {dormName}
        </p>
      </Link>
    </div>
  );
};

export default DormsBackToUniv;
