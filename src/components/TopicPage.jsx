import React, { useState } from "react";
import openDayData from "../data/OpenDay.json";

const TopicPage = ({ handleBackToMain, handleTopicReadMore }) => {
  const openDay = openDayData;
  const topics = openDay.topics;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen container mx-auto">
        <div className="mt-2">
          <div className="mt-3 flex items-center">
            <button
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleBackToMain}
            >
              Back to Main
            </button>
            <input
              type="text"
              placeholder="Search topics..."
              className="border border-gray-300 rounded-md py-2 px-3 ml-4"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className="rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={topic.cover_image}
                  alt={topic.name}
                  className="w-full h-40 object-cover "
                />
                <div className="p-4 flex flex-col justify-between h-56">
                  <h5 className="text-lg md:text-xl font-medium truncate mb-2">
                    {topic.name}
                  </h5>
                  <p className="text-slate-500 text-base mt-2 overflow-hidden line-clamp-3">
                    {topic.description}
                  </p>
                  <button
                    className="mt-auto px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => handleTopicReadMore(topic.id)}
                  >
                    Check Programs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicPage;
