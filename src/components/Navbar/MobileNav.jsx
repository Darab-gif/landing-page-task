import React from "react";
import scroll from "../../hook/useScroll";
import Button from "../Button";
import { FaTimes } from "react-icons/fa";

const MobileHeader = ({ MobileLink, about, features, plan }) => {
  return (
    <nav className="md:hidden flex  justify-center items-center  bg-bg w-full h-[50rem]">
      <FaTimes
        className="text-3xl absolute right-6 top-6 cursor-pointer text-white"
        onClick={() => MobileLink(false)}
      />

      <div className="flex md:flex-row flex-col space-y-4 gap-3 ">
        <ul className="text-white flex flex-col justify-center space-y-8 items-center gap-4  text-small font-[500]">
          <li className="cursor-pointer">Home</li>
          <li
            className="cursor-pointer"
            onClick={() => {
              MobileLink(false);
              scroll(features);
            }}
          >
            Features
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              MobileLink(false);
              scroll(about);
            }}
          >
            How it works
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              MobileLink(false);
              scroll(plan);
            }}
          >
            Pricing
          </li>
        </ul>
        <Button name="Get Started" bgColor="#fff" textColor="#221C38" />
      </div>
    </nav>
  );
};

export default MobileHeader;
