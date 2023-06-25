import React, { forwardRef } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const PlanAndPrice = forwardRef((props, ref) => {
  return (
    <div className="w-5/6 mx-auto mt-6" ref={ref}>
      <h1 className="text-white font-[500] text-normal text-center">
        Pricing and Plans
      </h1>
      <p className="md:text-16 text-14  text-gray text-center">
        Lorem ipsum dolor sit amet consectetur. Aliquet <br /> scelerisque sem
        commodo turpis ipsum.
      </p>
      <div className="flex gap-8 md:flex-row flex-col py-20">
        {/* Free card */}
        <div
          className="h-[510px] w-[340px] bg-purple bg-opacity-20 rounded-[16px] p-5"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h1 className="text-16 text-white py-6">Free</h1>
          <p className="text-white text-small pb-6">$0</p>
          <button className="w-[280px] py-4 text-white bg-purple rounded-[16px]">
            Get Started
          </button>
          <ul className="text-white mt-10">
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>{" "}
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>{" "}
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>
          </ul>
        </div>
        {/* Lite card */}
        <div
          className="h-[510px] w-[340px] bg-blue bg-opacity-20 rounded-[16px] p-5"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <h1 className="text-16 text-white py-6">Lite</h1>
          <p className="text-white text-small pb-6">$24</p>
          <button className="w-[280px] py-4 text-white bg-blue rounded-[16px]">
            Get Started
          </button>
          <ul className="text-white mt-10">
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>{" "}
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>{" "}
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>{" "}
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>
          </ul>
        </div>
        {/* Standard card */}
        <div
          className="h-[510px] w-[340px] bg-cyan bg-opacity-20 rounded-[16px] p-5"
          data-aos="flip-right"
          data-aos-duration="3000"
        >
          <h1 className="text-16 text-white py-6">Standard</h1>
          <p className="text-white text-small pb-6">$40</p>
          <button className="w-[280px] py-4 text-white bg-cyan rounded-[16px]">
            Get Started
          </button>
          <ul className="text-white mt-10">
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>{" "}
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>{" "}
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>{" "}
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>
            <li className="flex items-center gap-2 py-2">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>{" "}
            <li className="flex items-center gap-2 ">
              {" "}
              <span>
                <FaRegCheckCircle />
              </span>{" "}
              <span className="text-14">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default PlanAndPrice;
