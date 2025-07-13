import React from "react";
import Home from "./Home";
import { auth } from "@clerk/nextjs/server";
import { createUser } from "@/lib/db/createUsers";

const page = async () => {
  const { userId } = await auth();

  if (userId) {
    await createUser();
  }

  return (
    <>
      <Home />
    </>
  );
};

export default page;
