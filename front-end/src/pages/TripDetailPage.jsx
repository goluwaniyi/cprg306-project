import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import { baseUrl } from "../utils/baseUrl";

const TripDetailPage = () => {
  const navigate = useNavigate();
  const { continentId } = useParams();
  const { tripId } = useParams();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `${baseUrl}/api/continents/${continentId}/trips/${tripId}`;

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((response) => {
      setTrips(response.data);
      console.log(response.data);
      setLoading(false);
    });
  }, [url]);

  const Loading = () => {
    return (
      <div className="flex flex-wrap items-center justify-center h-screen">
        <GridLoader color={"#000"} loading={loading} />
      </div>
    );
  };

  const ShowTripDetail = () => {
      return (
        <div className="pt-[5rem]">
          <div className="w-full bg-[#000] p-7">
            <div className="px-4 lg:px-12 max-w-[1240px] mx-auto">
              <div className="text-white flex items-center gap-2">
                <div
                  onClick={() => {
                    navigate(-1);
                  }}
                  className="cursor-pointer font-bold"
                >
                  Back
                </div>{" "}
                <MdChevronRight className="inline" />{" "}
                <span className="text-gray-300">Trip Details</span>
              </div>
            </div>
          </div>
    
          <div className="px-4 lg:px-12 max-w-[1240px] mx-auto py-9">
            <div className="flex justify-between gap-8 flex-col md:flex-row">
              <div className="md:w-1/2">
                <div className="">
                  <img src={trips.bigImageURL} alt="/" />
                </div>
              </div>
              <div className="md:w-1/2">
                <div>
                  <h2 className="font-bold text-3xl md:text-4xl pb-4">About {trips.name}</h2>
                </div>
                <div className="font-bold text-lg py-1">
                  Country: <span className="font-normal">{trips.country}</span>{" "}
                </div>
                <div className="font-bold text-lg py-1">
                  Continent: <span className="font-normal">{trips.continent}</span>
                </div>
                <div className="font-bold text-lg py-1">
                  Price: <span className="font-normal">CAD {trips.price}</span>
                </div>
                <div className="font-bold text-lg py-1">
                  Brief Description:{" "}
                  <span className="font-normal"> {trips.description}</span>{" "}
                </div>
                <div className="text-lg">{trips.about}</div>
              </div>
            </div>
          </div>
        </div>
      );
  }

  return (
    <div>
      <div>{loading ? <Loading /> : <ShowTripDetail />}</div>
    </div>
  );

};

export default TripDetailPage;
