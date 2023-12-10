import React, { useEffect, useState } from "react";
import bgImage from "../assets/images/bgImage.jpg";
import { BsSearch } from "react-icons/bs";
import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import Trips from "./Trips";

const Hero = () => {
  const [continents, setContinents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const url = `${baseUrl}/api/continents?name=${value}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setContinents(res.data);
      console.log(res.data.results);
      setLoading(false);
    };

    const getData = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(getData);
  }, [url]);

  const handleSearch = async (e) => {
    e.preventDefault();
  };

  const Loading = () => {
    return (
      <div className="flex items-center justify-center py-9">
        <PropagateLoader color={"#000"} loading={loading} />
      </div>
    );
  };

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
                <form className="relative flex" onSubmit={handleSearch}>
                  <input
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
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

        <div className="px-4 lg:px-12 max-w-[1240px] mx-auto py-6">
          <div>
            <h2 className="text-red-500 text-4xl font-bold">Take a dive</h2>
            <h4 className="text-2xl font-bold">
              to top destinations across all continents
            </h4>
          </div>
          <div className="w-full h-full py-8">
            {loading ? (
              <Loading />
            ) : (
              <div className="flex items-center justify-center flex-col w-full h-full">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 w-full">
                    {continents?.map((continent) => (
                      <Trips key={continent._id} continent={continent} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
