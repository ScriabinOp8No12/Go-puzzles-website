import { React, useEffect } from "react";
import NextPageButton from "../../Navigation/NextPageButton";
import PreviousPageButton from "../../Navigation/PreviousPageButton";
import useNextPageNavigation from "../useNextPageNavigation";
import usePreviousPageNavigation from "../usePreviousPageNavigation";
import { useHistory, useParams } from "react-router-dom";
import LeftNavBar from "../LeftNavBar";
import "../styles/LearnAndPracticeIndex.css";
import ReadingPage1 from "./ReadingPage1";
import ReadingPage2 from "./ReadingPage2";
import ReadingPage3 from "./ReadingPage3";
import ReadingPage4 from "./ReadingPage4";
import ReadingPage5 from "./ReadingPage5";
import LadderPage1 from "./LadderPage1";
import LadderPage2 from "./LadderPage2";
import LadderPage3 from "./LadderPage3";
import LadderPage4 from "./LadderPage4";
import LadderPage5 from "./LadderPage5";
import ReadingLadderPuzzles from "./ReadingLadderPuzzles";
import CutsPage1 from "./CutsPage1";
import CutsPage2 from "./CutsPage2";
import CutsPage3 from "./CutsPage3";
import CutsPage4 from "./CutsPage4";

const FundamentalContainer = () => {
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
        return <ReadingPage1 />;
      case "2":
        return <ReadingPage2 />;
      case "3":
        return <ReadingPage3 />;
        case"4":
        return <ReadingPage4/>;
        case"5":
        return <ReadingPage5/>;
        case"6":
        return <LadderPage1/>;
        case"7":
        return <LadderPage2/>;
        case"8":
        return <LadderPage3/>;
        case"9":
        return <LadderPage4/>;
        case"10":
        return <LadderPage5/>;
        case"11":
        return <ReadingLadderPuzzles/>;
        case"12":
        return <CutsPage1/>;
        case"13":
        return <CutsPage2/>;
        case"14":
        return <CutsPage3/>;
        case"15":
        return <CutsPage4/>;
      default:
        return <div className="page-not-found-text">Page not found</div>;
    }
  };

  // Determine the pageType based on the pageNumber (glift puzzle rendering in tutorials is on page 6)
  const pageType = pageNumber === "11" ? "specialType" : "normalType";

  // Logic for checking pageType to see if it's a glift container and we want the buttons up down instead of left right
  const buttonContainerClass =
    pageType === "specialType"
      ? "button-container glift-puzzle-layout"
      : "button-container";

  return (
    <div className="learn-and-practice-container">
      <LeftNavBar />

      {renderPage()}
      <div className={buttonContainerClass}>
        {/* <div className="button-container"> */}
        <PreviousPageButton
          onClick={navigateToPreviousPage}
          isTutorial={true}
        />
        <NextPageButton onClick={navigateToNextPage} />
      </div>
    </div>
  );
};

export default FundamentalContainer;
