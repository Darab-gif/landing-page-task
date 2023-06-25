import React from "react";
import logo from "../../assets/logo.png";
import Button from "../Button";
import { FaBars } from "react-icons/fa";
import scroll from "../../hook/useScroll";

const Header = ({ MobileLink, about, features, plan }) => {
  return (
    <nav className="flex justify-between items-center pt-3 ">
      <div className="flex items-center justify-center md:gap-3 gap-2 md:pl-14 pl-5">
        <img
          src={logo}
          alt="logo"
          className="md:h-[57px] h-[50px] md:w-[81px] w-[60px]"
        />
        <p className="text-white text-normal font-[500]">NEPTIS</p>
      </div>
      <div className="md:flex gap-3 pr-24 hidden ">
        <ul className="text-white flex gap-4  text-small font-[500]">
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
      <FaBars
        onClick={() => MobileLink(true)}
        className="md:hidden block text-3xl text-white cursor-pointer pr-4"
      />
    </nav>
  );
};

export default Header;
