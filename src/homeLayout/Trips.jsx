import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Trips = ({ continent }) => {
  return (
    <div id="trips">
      <Link to={`/continents/${continent.id}`}>
        <div className="flex items-center justify-center flex-col">
          <div className="group flex justify-center text-center relative overflow-hidden cursor-pointer w-[350px] h-[300px]">
            <img
              src={continent.displayImage}
              alt={continent?.name}
              className="object-cover ease-in-out duration-500 group-hover:scale-125 w-[350px] h-[300px]"
            />
            <div className="absolute bg-gradient-to-r from-black opacity-10 w-[350px] h-[300px] transition-opacity duration-500 group-hover:opacity-70">
              <p className="white-space-normal font-bold justify-center items-center h-full text-center hover:text-white flex text-transparent text-lg">
                Explore {continent.name}{" "}
                <HiArrowNarrowRight className="inline ml-3" />
              </p>
            </div>
          </div>
        </div>
        <p className="py-2 font-bold text-xl">{continent.name}</p>
      </Link>
    </div>
  );
};

export default Trips;
