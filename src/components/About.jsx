import React, { forwardRef } from "react";
import subhero from "../assets/subhero.png";
import mobile from "../assets/mobile.png";

const About = forwardRef((props, ref) => {
  return (
    <div className="w-5/8 mx-auto mt-32" ref={ref}>
      <h2 className="text-white font-[500] text-normal text-center">
        How It Works
      </h2>
      <div className="flex md:justify-between md:flex-row flex-col py-14">
        <div className="md:w-[28rem] w-[19rem] md:pl-40 pl-16 item relative">
          <div>
            <h1 className="md:text-small text-[16px] text-white font-[500]">
              AI-Powered Website Generation
            </h1>
            <p className="py-4 text-gray text-14">
              Create stunning and functional websites effortlessly with our
              AI-powered website generation feature, which seamlessly transforms
              web designs into fully operational sites.
            </p>
          </div>
          <div>
            <h1 className="md:text-small text-[16px] text-white font-[500]">
              Customizable Design Elements
            </h1>
            <p className="py-4 text-gray text-14">
              Customize every aspect of your website with ease using our wide
              range of design elements, ensuring a unique and personalized
              online presence.
            </p>
          </div>
          <div>
            <h1 className="md:text-small text-[16px] text-white font-[500]">
              User-Friendly Interface
            </h1>
            <p className="py-4 text-gray text-14">
              Creating a website has never been easier. Our user-friendly
              interface ensures a seamless and intuitive website building
              experience.
            </p>
          </div>
        </div>
        <img
          src={subhero}
          alt="ads"
          className="h-[410px] w-[730px] md:block hidden"
        />
        <img
          src={mobile}
          alt="mobile"
          className="md:hidden block w-[290px] mx-auto mt-5"
        />
      </div>
    </div>
  );
});

export default About;
