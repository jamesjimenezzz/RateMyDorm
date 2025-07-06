import React from "react";
import Landing from "./Landing";
import PopSchools from "./PopSchools";
import Footer from "./Footer";
import PopDorms from "./PopDorms";
import HighestRatingDorms from "./HighestRatingDorms";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl text-center flex flex-col items-center justify-center  overflow-hidden mx-auto">
        <Landing />
        <PopSchools />
        <PopDorms />
        <HighestRatingDorms />
      </div>
      <Footer />
    </>
  );
};

export default Home;
