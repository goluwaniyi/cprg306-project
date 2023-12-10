import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";
import { IoGridOutline, IoGrid } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import ListView from "../components/toggleViews/ListView";
import Gridview from "../components/toggleViews/Gridview";
import { BsSearch } from "react-icons/bs";

const ContinentPage = () => {
  const [continent, setContinent] = useState([]);
  const [continentData, setContinentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { continentId } = useParams();
  const { tripId } = useParams();
  const [view, setView] = useState("list");
  const [sortOrder, setSortOrder] = useState("");
  const [value, setValue] = useState("");

  const url = `${baseUrl}/api/continents/${continentId}`;
  const searchUrl = `${baseUrl}/api/continents/${continentId}?name=${value}`;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    setLoading(true);
    axios.get(url).then((res) => {
      setContinent(res.data.continent);
      setLoading(false);
    });
  }, [url]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(searchUrl);
      setContinentData(res.data.trips);
    };

    const getData = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(getData);
  }, [searchUrl]);

  const handleSearch = async (e) => {
    e.preventDefault();
  };
  const sortData = (order) => {
    const sorted = [...continentData].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      return order === "asc" ? priceA - priceB : priceB - priceA;
    });
    setContinentData(sorted);
  };

  const handleSortChange = (event) => {
    const order = event.target.value;

    sortData(order);

    setSortOrder(order);
  };

  const renderData = continentData.length ? continentData : continentData;

  const Loading = () => {
    return (
      <div className="flex flex-wrap items-center justify-center h-screen">
        <GridLoader color={"#000"} loading={loading} />
      </div>
    );
  };

  return (
    <div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="pt-[5rem]">
            <div className="w-full h-[60vh] text-white">
              <div className="w-full h-full">
                <div className="absolute w-full h-[60vh] bg-gradient-to-r from-black"></div>
                <img
                  className="w-full h-full object-cover object-center"
                  src={continent.coverImage}
                  alt="/"
                />

                <div className="absolute w-full top-[17%] p-4 lg:p-8">
                  <div className="max-w-[1240px] px-2 lg:px-4 mx-auto">
                    <div className="flex items-center justify-center flex-col">
                      <h1 className="text-3xl font-bold md:text-6xl py-4 text-center md:w-[80%]">
                        {continent.adventureIntros}
                      </h1>
                      <p className="pt-2 font-semibold text-center md:w-1/2">
                        {continent.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="px-4 lg:px-16 max-w-[1240px] mx-auto">
                <div className="flex justify-between pt-4 flex-col  gap-4">
                  <div>
                    <h4 className="font-bold text-xl md:hidden">
                      Looking to explore somewhere in {continent.name}? We've
                      got you covered
                    </h4>
                    <h4 className="font-bold text-xl hidden md:block">
                      Looking to explore somewhere in {continent.name}? <br />{" "}
                      We've got you covered
                    </h4>
                  </div>
                  <div className="flex lg:items-center flex-col md:flex-row gap-4 justify-between">
                    <form className="relative" onSubmit={handleSearch}>
                      <div>
                        <input
                          onChange={(e) => {
                            setValue(e.target.value);
                          }}
                          type="text"
                          placeholder="Search for trips or country"
                          className="bg-[#f5f5f5] flex justify-between items-center m-auto p-2 rounded-2xl text-gray-500 focus:outline-none pl-10 text-sm w-full md:w-[20rem] lg:w-[30rem]"
                        />
                      </div>
                      <div className="absolute top-[13px] left-4 text-gray-500">
                        <BsSearch size={15} />
                      </div>
                    </form>
                    <div className="flex items-center justify-between gap-8">
                      <div className="flex items-center gap-2 text-black">
                        <div>
                          <p>Sort by:</p>
                        </div>
                        <div>
                          <select
                            className="bg-[#f5f5f5] cursor-pointer border border-[#D9D9D9] p-1 rounded-md text-sm outline-[#d9d9d9]"
                            value={sortOrder}
                            onChange={handleSortChange}
                          >
                            <option value="" disabled hidden>
                              Price...
                            </option>
                            <option value="asc" onClick={sortData}>
                              Lowest Price
                            </option>
                            <option value="desc" onClick={sortData}>
                              Highest Price
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          {view === "list" ? (
                            <FaListUl
                              className="cursor-pointer text-red-500  border border-red-500 p-[1px]"
                              size={20}
                              onClick={() => setView("list")}
                            />
                          ) : (
                            <CiCircleList
                              className="cursor-pointer"
                              size={20}
                              onClick={() => setView("list")}
                            />
                          )}
                        </div>
                        <div>
                          {view === "list" ? (
                            <IoGridOutline
                              onClick={() => setView("grid")}
                              size={20}
                              className="cursor-pointer"
                            />
                          ) : (
                            <IoGrid
                              onClick={() => setView("grid")}
                              size={20}
                              className="cursor-pointer text-red-500 border border-red-500 p-[1px]"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {view === "list" ? (
                    <ListView continentData={renderData} tripId={tripId} />
                  ) : (
                    <Gridview continentData={renderData} tripId={tripId} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContinentPage;
