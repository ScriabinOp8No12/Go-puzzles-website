import React from "react";
import "./styles/LearnAndPracticeIndex.css";
import { useHistory, useParams } from "react-router-dom";
import LeftNavBar from "./LeftNavBar";
import BasicRulesPage1 from "./BasicRulesPage1";

const LearnAndPracticeBasicRules = () => {
  const history = useHistory();
  const { pageNumber } = useParams();

  const navigateToNextPage = () => {
    const nextPage = parseInt(pageNumber, 10) + 1;
    history.push(`/learn-and-practice/basic-rules/${nextPage}`);
  };

  return (
    <div className="learn-and-practice-container">
      <LeftNavBar></LeftNavBar>

      {/* Main Content */}
      <BasicRulesPage1></BasicRulesPage1>
      <button onClick={navigateToNextPage} className="next-page-button">
        Next Page
      </button>
    </div>
  );
};

export default LearnAndPracticeBasicRules;
