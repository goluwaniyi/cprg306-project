import React from "react";
import continents from "../data/continents";
import { HiArrowNarrowRight } from "react-icons/hi";

const Trips = () => {
  return (
    <div className="py-[2rem]" id="trips">
      <div>
        <h2 className="text-red-500 text-4xl font-bold">Take a dive</h2>
        <h4 className="text-2xl font-bold">
          to top destinations across all continents
        </h4>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-8 py-9 w-full">
            {continents.map((continent, index) => (
              <div>
                <div className="group flex justify-center text-center relative overflow-hidden cursor-pointer w-[350px] xs:w-[380px] h-[300px]">
                  <img
                    src={continent.img}
                    alt={continent?.name}
                    className="object-cover ease-in-out duration-500 group-hover:scale-125 w-[350px] xs:w-[380px] h-[300px]"
                  />
                  <div className="absolute bg-gradient-to-r from-black opacity-10 w-[350px] xs:w-[380px] h-[300px] transition-opacity duration-500 group-hover:opacity-70">
                    <p className="white-space-normal font-bold justify-center items-center h-full text-center          hover:text-white flex text-transparent text-lg">
                      Explore {continent.name}{" "}
                      <HiArrowNarrowRight className="inline ml-3" />
                    </p>
                  </div>
                </div>
                <p className="py-2 font-bold text-xl">{continent.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;
