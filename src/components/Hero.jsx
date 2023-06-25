import React from "react";

import Button from "./Button";
import hero from "../assets/hero.png";
import mobile from "../assets/mobile.png";
import NavBar from "./Navbar/NavBar";

const Hero = ({ about, features, plan }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-bglight to-indigo-900 max-h-[90rem] w-full">
      <NavBar about={about} features={features} plan={plan} />
      <div className="text-center w-5/6 mx-auto py-14">
        <h2
          className="text-white md:text-[64px] text-[26px] md:leading-[65px] leading-7 font-[500]"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          Transform Your Images into <br /> Stunning Websites with Neptis
        </h2>
        <p
          className="text-white mt-4"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          "Harness the power of AI to turn your website designs into reality
        </p>
        <Button
          name="Get started"
          bgColor="#A522C3"
          textColor="#fff"
          mgTop="20px"
        />
      </div>
      <img
        src={hero}
        alt="hero"
        className="w-[1114px] h-[568px] mx-auto lg:block hidden"
        data-aos="zoom-in"
        data-aos-duration="3000"
      />
      <img
        src={mobile}
        alt="mobile"
        className="lg:hidden block w-[290px] mx-auto"
        data-aos="zoom-in"
        data-aos-duration="3000"
      />
    </div>
  );
};

export default Hero;
