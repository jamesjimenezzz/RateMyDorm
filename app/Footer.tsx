import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white px-5   mt-10 mx-auto text-start ">
      <div className=" grid grid-cols-3 max-w-7xl mx-auto py-15">
        <div className="flex flex-col gap-2 max-w-md">
          <h1 className="font-semibold text-2xl">RateMyDorm</h1>
          <p className="text-gray-400">
            The most trusted platform for college dorm reviews. Help future
            students make informed decisions about their housing choices.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center text-start ">
          <ul className="flex flex-col text-gray-400 gap-2">
            <li className="text-white font-semibold">Quick Links</li>
            <li>All Schools</li>
            <li>About Us</li>
            <li>Write a Review</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 items-center text-start  ">
          <ul className="flex flex-col text-gray-400 gap-2">
            <li className="text-white font-semibold">Legal</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center border-t border-gray-700 max-w-7xl mx-auto py-7 items-center">
        <p className="text-gray-400">
          &copy; 2024 RateMyDorm. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
