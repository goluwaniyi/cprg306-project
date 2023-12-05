import React from "react";
import bgImage from "../assets/images/bgImage.jpg";
import { BsSearch } from "react-icons/bs";

const Hero = () => {
  return (
    <div id="hero">
      <div className="pt-[5rem] w-full">
        <div className="w-full h-[70vh] text-white">
          <div className="w-full h-full">
            <div className="absolute w-full h-[70vh] bg-gradient-to-r from-black"></div>
            <img
              className="w-full h-full object-cover object-center"
              src={bgImage}
              alt="/"
            />

            <div className="absolute w-full top-[30%] sm:top-[30%] flex flex-col justify-center items-center p-4 md:p-8">
              <h1 className="text-2xl font-bold md:text-3xl py-4">
                Where in the world are you going to?
              </h1>
              <div className="flex">
                <form className="relative flex">
                  <input
                    className=" border border-input px-10 py-2 w-[15rem] sm:w-[38rem] shadow-lg rounded-full text-black"
                    type="text"
                    placeholder="Search for Continents"
                  />
                  <div className="absolute top-[13px] left-4 text-gray-500">
                    <BsSearch size={15} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
