import React from "react";
import Landing from "./Landing";
import PopSchools from "./PopSchools";
import Footer from "./Footer";
import PopDorms from "./PopDorms";
import HighestRatingDorms from "./HighestRatingDorms";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser } from "@/lib/db/createUsers";

const Home = async () => {
  const { userId } = await auth();

  if (userId) {
    await createUser();
  }

  return (
    <>
      <div className="max-w-7xl px-5 text-center flex flex-col items-center justify-center  overflow-hidden mx-auto">
        <Landing />
        <PopSchools />
        <PopDorms />
        <HighestRatingDorms />
      </div>
    </>
  );
};

export default Home;
