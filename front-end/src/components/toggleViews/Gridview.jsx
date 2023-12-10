import React from "react";
import { Link } from "react-router-dom";

const Gridview = ({ continentData, tripId }) => {
  return (
    <div>
      <div className="py-8">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {continentData?.map((continent) => (
                <div key={continent.id}>
                  <Link to={`trips/${continent.id}`}>
                    <div className="group flex justify-center relative overflow-hidden cursor-pointer w-[350px] h-[300px] rounded-xl hover:shadow-md">
                      <img
                        src={continent.bigImageURL}
                        alt="/"
                        className="rounded-xl object-cover ease-in-out duration-500 group-hover:scale-125 group-hover:rotate-6 w-[350px] h-[300px]"
                      />
                      <div className="absolute w-[350px] h-[300px] duration-500 bg-black/50">
                        <div className="pt-16 px-5 rounded-md w-[350px] text-white">
                          <div className="pb-9">
                            <h6 className="font-bold text-xl">
                              {continent.name}
                            </h6>
                            <p className="tracking-wide text-[#d6d4d4]">
                              {continent.description}
                            </p>
                          </div>
                          <hr />
                          <div className="text-[#d6d4d4] pt-3">
                            <p>
                              Country:
                              <span className="text-white font-bold">
                                {" "}
                                {continent.country}
                              </span>
                            </p>
                            <p>
                              Price:{" "}
                              <span className="text-white font-bold">
                                CAD {continent.price}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gridview;
