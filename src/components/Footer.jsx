import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className="flex justify-between md:flex-row flex-col items-center py-5 md:w-5/6 w-full md:mx-auto pr-44 md:pr-1">
      <div className="flex items-center justify-center gap-3 ">
        <img src={logo} alt="logo" className="h-[57px] w-[81px]" />
        <p className="text-white text-normal font-[500]">NEPTIS</p>
      </div>
      <div className="flex gap-3 md:mt-0 mt-7">
        <ul className="text-white flex md:flex-row flex-col md:gap-4 gap-3   text-small">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>
      </div>
      <div className="flex gap-4 text-white md:mt-0 mt-7">
        <span className="cursor-pointer">
          <FaTwitter />
        </span>
        <span className="cursor-pointer">
          <FaLinkedin />
        </span>
        <span className="cursor-pointer">
          <FaFacebook />
        </span>
      </div>
    </nav>
  );
};

export default Footer;
