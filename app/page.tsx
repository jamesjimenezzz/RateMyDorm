import React from "react";
import Home from "./Home";
import { auth } from "@clerk/nextjs/server";
import { createUser } from "@/lib/db/createUsers";

const page = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default page;
