import Link from "next/link";
import React from "react";
import BackToHome from "@/components/BackToHome";

const AllSchools = () => {
  const schools = [
    "University of the Philippines Diliman",

    "Ateneo de Manila University",
    "De La Salle University",
    "University of Santo Tomas",
    "Polytechnic University of the Philippines",
    "Far Eastern University",
    "Mapúa University",
    "Adamson University",
    "Pamantasan ng Lungsod ng Maynila",
    "Technological Institute of the Philippines",
    "University of the East",
    "Centro Escolar University",
    "Lyceum of the Philippines University",
    "Philippine Normal University",
    "National University",
    "University of the Philippines Los Baños",
    "Batangas State University",
    "Pangasinan State University",
    "Mariano Marcos State University",
    "Bicol University",
    "University of the Philippines Visayas",
    "University of San Carlos",
    "Silliman University",
    "University of the Visayas",
    "Cebu Technological University",
    "Central Philippine University",
    "University of Negros Occidental - Recoletos",
    "West Visayas State University",
    "Mindanao State University Main Campus",
    "Ateneo de Davao University",
    "Xavier University Ateneo de Cagayan",
    "University of Southeastern Philippines",
    "University of Mindanao",
    "Central Mindanao University",
    "Mindanao State University Iligan Institute of Technology",
    "Western Mindanao State University",
  ];

  const filterAlphabetically = schools.sort((a, b) => {
    return a.localeCompare(b);
  });

  const slug = filterAlphabetically.map((school) =>
    school.toLowerCase().replace(/ /g, "-")
  );

  return (
    <div className="max-w-7xl px-5 mx-auto my-10">
      <BackToHome />
      <div>
        <div className="flex font-semibold gap-2 items-center">
          <p className=" text-2xl">{schools.length}</p>
          <h1 className="text-2xl">Schools on RateMyDorm</h1>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-muted-foreground">Didn't find your school?</p>
          <Link href={"/add-school"}>
            <p className="hover:underline cursor-pointer font-semibold text-blue-400">
              Add your school
            </p>
          </Link>
        </div>
      </div>
      <div className="my-7">
        {filterAlphabetically.map((school, index) => (
          <p
            className="font-[500] my-1.5 hover:underline cursor-pointer"
            key={school}
          >
            <Link href={`/dorms/${slug[index]}`}>{school}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AllSchools;
