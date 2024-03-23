import React, { useState } from "react";
import HomePage from "./components/HomePage";
import TopicPage from "./components/TopicPage";
import ProgramPage from "./components/ProgramPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const handleReadMore = () => {
    setCurrentPage("topics");
  };

  const handleBackToMain = () => {
    setCurrentPage("home");
  };

  const handleBackToTopics = () => {
    setCurrentPage("topics");
  };

  function handleTopicReadMore(topicId) {
    setSelectedTopicId(topicId);
    setCurrentPage("programs");
  }

  return (
    <div>
      {currentPage === "home" && <HomePage handleReadMore={handleReadMore} />}
      {currentPage === "topics" && (
        <TopicPage
          handleBackToMain={handleBackToMain}
          handleTopicReadMore={handleTopicReadMore}
        />
      )}
      {currentPage === "programs" && (
        <ProgramPage
          handleBackToTopics={handleBackToTopics}
          selectedTopicId={selectedTopicId}
        />
      )}
    </div>
  );
};

export default App;
