import { React, useEffect } from "react";
import NextPageButton from "../../Navigation/NextPageButton";
import PreviousPageButton from "../../Navigation/PreviousPageButton";
import useNextPageNavigation from "../useNextPageNavigation";
import usePreviousPageNavigation from "../usePreviousPageNavigation";
import { useHistory, useParams } from "react-router-dom";
import LeftNavBar from "../LeftNavBar";
import MoreRulesPage1 from "./MoreRulesPage1";
import MoreRulesPage2 from "./MoreRulesPage2";
import MoreRulesPage3 from "./MoreRulesPage3";
import MoreRulesPage4 from "./MoreRulesPage4";
import MoreRulesPage5 from "./MoreRulesPage5";

import "../styles/LearnAndPracticeIndex.css";

const MoreRulesContainer = () => {
  const history = useHistory();
  const { pageNumber } = useParams();

  const navigateToNextPage = useNextPageNavigation();
  const navigateToPreviousPage = usePreviousPageNavigation();

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
    switch (pageNumber) {
      case "1":
        return <MoreRulesPage1 />;
      case "2":
        return <MoreRulesPage2 />;
        case"3":
        return <MoreRulesPage3/>;
        case"4":
        return <MoreRulesPage4/>;
        case"5":
        return <MoreRulesPage5/>;
      default:
        return <div className="page-not-found-text">Page not found</div>;
    }
  };

  // Determine the pageType based on the pageNumber (glift puzzle rendering in tutorials is on page 7)
  // const pageType = pageNumber === "7" ? "specialType" : "normalType";

  // Logic for checking pageType to see if it's a glift container and we want the buttons up down instead of left right
  // const buttonContainerClass =
  //   pageType === "specialType"
  //     ? "button-container glift-puzzle-layout"
  //     : "button-container";

  return (
    <div className="learn-and-practice-container">
      <LeftNavBar />

      {renderPage()}
      {/* <div className={buttonContainerClass}> */}
      <div className="button-container">
        <PreviousPageButton
          onClick={navigateToPreviousPage}
          isTutorial={true}
        />
        <NextPageButton onClick={navigateToNextPage} />
      </div>
    </div>
  );
};

export default MoreRulesContainer;
