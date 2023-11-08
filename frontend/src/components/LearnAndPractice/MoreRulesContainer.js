import { React, useEffect } from "react";
import "./styles/LearnAndPracticeIndex.css";
import { useHistory, useParams } from "react-router-dom";
import LeftNavBar from "./LeftNavBar";
import MoreRulesPage1 from "./MoreRulesPage1";
import BasicRulesPage2 from "./BasicRulesPage2";

const MoreRulesContainer = () => {
  const history = useHistory();
  const { section, pageNumber } = useParams();

  const navigateToNextPage = () => {
    // Convert string of pageNumber to number
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

export default MoreRulesContainer;
