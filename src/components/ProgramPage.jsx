import React, { useState } from "react";
import openDayData from "../data/OpenDay.json";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ProgramPage = ({ handleBackToTopics, selectedTopicId }) => {
  const topics = openDayData.topics;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProgramLocation, setSelectedProgramLocation] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const selectedTopic = topics.find((topic) => topic.id === selectedTopicId);

  const filteredPrograms = selectedTopic
    ? selectedTopic.programs.filter((program) =>
        program.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleLocationDetails = (location) => {
    setSelectedProgramLocation(location);
  };

  return (
    <>
      <div className="min-h-screen container mx-auto">
        <div className="mt-3 flex items-center">
          <button
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleBackToTopics}
          >
            Back to Topics
          </button>
          <input
            type="text"
            placeholder="Search programs..."
            className="border border-gray-300 rounded-md py-2 px-3 ml-4"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="mt-2 grid grid-cols-1 gap-4">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex items-center">
                  {program.location.active === 1 ? (
                    <FaCheckCircle className="text-green-500 mr-2" />
                  ) : (
                    <FaTimesCircle className="text-red-500 mr-2" />
                  )}
                  <h5 className="text-lg md:text-xl font-medium">
                    {program.title}
                  </h5>
                </div>
                <div className="w-full h-64 mt-2">
                  <img
                    src={program.location.cover_image}
                    alt={program.location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-slate-800 text-lg mt-2 overflow-hidden ">
                  {program.description_short}
                </p>
                <p className="text-slate-500 text-base mt-2 overflow-hidden ">
                  {program.description}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <p className="text-gray-700 text-base mt-2">
                      Start Time: {program.start_time}
                    </p>
                    <p className="text-gray-700 text-base">
                      End Time: {program.end_time}
                    </p>
                    <p className="text-gray-700 text-base">
                      Room: {program.room}
                    </p>
                    <p className="text-gray-700 text-base">
                      Type: {program.programType.type}
                    </p>
                    <button
                      className="mt-4 px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-auto"
                      onClick={() => handleLocationDetails(program.location)}
                    >
                      Location Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProgramLocation && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Location Details</h2>
            <p>Title: {selectedProgramLocation.title}</p>
            <p className="mt-2">
              Description: {selectedProgramLocation.description}
            </p>
            <p className="mt-2">
              Address: {selectedProgramLocation.address},{" "}
              {selectedProgramLocation.postcode}
            </p>
            <p className="mt-2">
              Website:{" "}
              <a
                href={selectedProgramLocation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                {selectedProgramLocation.website}
              </a>
            </p>
            <div className="flex items-center mt-2">
              <p className="mr-2">Accessible:</p>
              {selectedProgramLocation.accessible === 1 ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
            </div>
            <div className="flex items-center mt-2">
              <p className="mr-2">Parking:</p>
              {selectedProgramLocation.parking === 1 ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
            </div>
            <div className="flex items-center mt-2">
              <p className="mr-2">Bike Parking:</p>
              {selectedProgramLocation.bike_parking === 1 ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => setSelectedProgramLocation(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgramPage;
