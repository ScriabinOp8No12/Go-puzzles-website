import { React, useEffect } from "react";
import "./styles/LearnAndPracticeIndex.css";
import { useHistory, useParams } from "react-router-dom";
import LeftNavBar from "./LeftNavBar";
import MoreRulesPage1 from "./MoreRulesPage1";
import BasicRulesPage2 from "./BasicRulesPage2";
import BasicRulesPage3 from "./BasicRulesPage3";
import BasicRulesPage4 from "./BasicRulesPage4";
import BasicRulesPage5 from "./BasicRulesPage5";
import BasicRulesPage6 from "./BasicRulesPage6";
import BasicRulesPage7 from "./BasicRulesPage7";
import BasicRulesQuiz from "./BasicRulesQuiz";

const LearnAndPracticeMoreRules = () => {
  const history = useHistory();
  const { section, pageNumber } = useParams();

  const navigateToNextPage = () => {
    // Assuming 'pageNumber' is a string representing a number, have to convert it to a number
    const nextPageNumber = parseInt(pageNumber, 10) + 1;

    // URL pattern is '/learn-and-practice/:section/:pageNumber'
    history.push(`/learn-and-practice/${section}/${nextPageNumber}`);
  };

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

  return (
    <div className="learn-and-practice-container">
      <LeftNavBar/>

      {/* Main Content */}
      {pageNumber === "1" ? (
        <MoreRulesPage1 />
      )
      : pageNumber === "2" ? (
        <BasicRulesPage2 />
      ) : pageNumber === "3" ? (
        <BasicRulesPage3 />
      ) : pageNumber === "4" ? (
        <BasicRulesPage4 />
      ) : pageNumber === "5" ? (
        <BasicRulesPage5 />
      ) : pageNumber === "6" ? (
        <BasicRulesPage6 />
      ) : pageNumber === "7" ? (
        <BasicRulesPage7 />
      ) : pageNumber === "quiz" ? (
        <BasicRulesQuiz />
      )
      : (
        <div className="page-not-found-text">Page not found</div>
      )}
      <button onClick={navigateToNextPage} className="next-page-button">
        Next Page
      </button>
    </div>
  );
};

export default LearnAndPracticeMoreRules;
