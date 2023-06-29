import React, { forwardRef } from "react";
import { features } from "../utils/data";

const Features = forwardRef((props, ref) => {
  return (
    <div className="mt-16" ref={ref}>
      <h1
        className="text-white font-[500] text-normal text-center"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        Amazing Features for You
      </h1>
      <div
        className="flex md:flex-row flex-col mx-auto w-5/6 gap-5 py-6"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        {features.map((item, index) => (
          <div
            className="bg-lightpurple bg-opacity-25 h-[239px] md:w-[295px] w-[305px]  p-5 md:ml-3 ml-0"
            key={index}
          >
            <h2 className="font-[500] md:text-xl text-16 text-white">
              {item.head}
            </h2>
            <p className="py-4 text-gray text-14">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Features;
