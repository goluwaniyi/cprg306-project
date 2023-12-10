import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const ListView = ({ continentData, tripId }) => {
  return (
    <div>
      <div className="py-8">
        <div className="overflow-x-auto">
          <table className="border-collapse whitespace-nowrap w-full">
            <thead className="h-12">
              <tr>
                <td className="text-sm text-black font-bold">Trip</td>
                <td className="text-sm text-black font-bold">Country</td>
                <td className="text-sm text-black font-bold">Continent</td>
                <td className="text-sm text-black font-bold">Price</td>
              </tr>
            </thead>
            <tbody>
              {continentData?.map((continent) => (
                <>
                  <tr
                    className="bg-[#f5f5f5] h-16 hover:shadow-md hover:h-[66px]"
                    key={continent.id}
                  >
                    <td className="pr-5 md:pr-0">
                      <div className="flex items-center gap-2 ml-2">
                        <div className="w-20 h-20 flex items-center justify-center">
                          <img
                            src={continent.smallImageURL}
                            alt="image"
                            className="rounded-md"
                          />
                        </div>
                        <div>
                          <p className="text-black text-sm">{continent.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-sm text-black pr-5 md:pr-0">
                      {continent.country}
                    </td>
                    <td className="text-sm text-black pr-5 md:pr-0">
                      {continent.continent}
                    </td>
                    <td className="text-sm text-black pr-5 md:pr-0">
                      CAD {continent.price}
                    </td>
                    <td className="cursor-pointer">
                      <Link to={`trips/${continent.id}`}>
                        <HiArrowNarrowRight />
                      </Link>
                    </td>
                  </tr>
                  <tr className="h-3"></tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListView;
