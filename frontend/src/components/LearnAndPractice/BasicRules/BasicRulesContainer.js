import React, { useEffect } from "react";
import NavigationButton from '../NavigationButton';
import useNavigation from '../useNavigation';
import { useHistory, useParams } from "react-router-dom";
import LeftNavBar from "../LeftNavBar";
import BasicRulesPage1 from "./BasicRulesPage1";
import BasicRulesPage2 from "./BasicRulesPage2";
import BasicRulesPage3 from "./BasicRulesPage3";
import BasicRulesPage4 from "./BasicRulesPage4";
import BasicRulesPage5 from "./BasicRulesPage5";
import BasicRulesPage6 from "./BasicRulesPage6";
import BasicRulesPage7 from "./BasicRulesPage7";
import BasicRulesQuiz from "./BasicRulesQuiz";
import "../styles/LearnAndPracticeIndex.css";

const BasicRulesContainer = () => {
  const history = useHistory();
  const { pageNumber } = useParams();

  const navigateToNextPage = useNavigation();

  useEffect(() => {
    // When location changes, scroll to the top of the page
    const unlisten = history.listen(() => {
      setTimeout(() => {
        if (window.scrollY > 0) {
          window.scrollTo(0, 0);
        }
      }, 0);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  // Determine which page component to render based on the pageNumber.
  const renderPage = () => {
    switch(pageNumber) {
      case "1": return <BasicRulesPage1 />;
      case "2": return <BasicRulesPage2 />;
      case "3": return <BasicRulesPage3 />;
      case "4": return <BasicRulesPage4 />;
      case "5": return <BasicRulesPage5 />;
      case "6": return <BasicRulesPage6 />;
      case "7": return <BasicRulesPage7 />;
      case "quiz": return <BasicRulesQuiz />;
      default: return <div className="page-not-found-text">Page not found</div>;
    }
  };

  return (
    <div className="learn-and-practice-container">
      <LeftNavBar />
      {/* Render the appropriate page component based on the current route */}
      {renderPage()}
      {/* Use the NavigationButton component */}
      <NavigationButton onClick={navigateToNextPage}/>
    </div>
  );
};

export default BasicRulesContainer;
