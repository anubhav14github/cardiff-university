import React from "react";
import openDayData from "../data/OpenDay.json";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const HomePage = ({ handleReadMore }) => {
  const openDay = openDayData;

  return (
    <>
      <div className="min-h-screen container mx-auto">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <div className="flex items-center">
                {openDay.active === 1 ? (
                  <FaCheckCircle className="text-green-500 mr-2" />
                ) : (
                  <FaTimesCircle className="text-red-500 mr-2" />
                )}
                <div className="font-bold text-xl mb-2">
                  {openDay.description}
                </div>
              </div>

              <p className="text-gray-700 text-base">{`Start Time: ${openDay.start_time}`}</p>
              <p className="text-gray-700 text-base">{`End Time: ${openDay.end_time}`}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleReadMore}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
