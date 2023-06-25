import React, { forwardRef } from "react";
import avatar from "../assets/avatar.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Testmony = forwardRef((props, ref) => {
  return (
    <div
      className="py-32 bg-gradient-to-r from-bglight to-indigo-900"
      ref={ref}
    >
      <h1 className="text-white font-[500] text-normal text-center">
        Testmonials
      </h1>

      <div className="bg-lightpurple bg-opacity-30 md:w-5/6 w-[90%] mx-auto text-center mt-20">
        <p
          className="md:text-16 text-14 text-white text-opacity-80 p-9"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque sem
          commodo turpis ipsum. Et tristique arcu arcu sed feugiat tempus purus
          nullam gravida. Vitae gravida dui gravida amet vitae. Malesuada
          quisque accumsan quis cursus enim. Commodo in sit platea eget
          lobortis. Suspendisse nulla leo eget fringilla justo ultrices.
          Vestibulum sed mi donec maecenas sit nisi. Etiam tincidunt ultrices
          sit sit sociis rutrum dui. Fames nunc quam ullamcorper cursus. Diam
          vitae euismod curabitur ullamcorper.
        </p>
        <div
          className="flex items-center justify-center gap-3 pb-4"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <img src={avatar} alt="avatar" />
          <div>
            <h1 className="text-white text-16">Nicole Jaymer</h1>
            <p className="text-14 text-gray">Head of Noin Group</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3  md:ml-[39rem] ml-36 mt-10">
        <button className="px-3 py-3 rounded-full text-white border border-white">
          <FaArrowLeft />
        </button>
        <button className="px-3 py-3 rounded-full text-black bg-white border border-white">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
});

export default Testmony;
