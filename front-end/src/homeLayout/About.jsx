import React from "react";
import globe from "../assets/images/globe.png";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl md:text-4xl tracking-wid after:w-[60px] after:h-[5px] after:bg-[#000] after:block after:m-auto after:mt-[0.5rem] mb-2">
          About Us
        </h1>
      </div>

      <div className="flex items-center justify-center gap-12">
        <div className="w-1/2">
          <p className="font-semibold text-lg">
            Trip Explorer simplifies travel planning by providing users with
            trip ideas and suggesting the best countries based on the desired
            continent. The platform caters to a diverse audience looking for
            travel inspiration and recommendations.
          </p>
        </div>
        <div className="w-1/2">
          <img src={globe} alt="/" />
        </div>
      </div>

      <div className="flex justify-center py-2">
        <HashLink smooth
                  to="/#hero">
          <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <HiOutlineChevronDoubleUp color={"#ff5757"} />
          </div>
        </HashLink>
      </div>
    </div>
  );
};

export default About;
