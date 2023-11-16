import { React, useEffect } from "react";
import NextPageButton from "../../Navigation/NextPageButton";
import useNavigation from '../useNavigation';
import { useHistory, useParams } from "react-router-dom";
import LeftNavBar from "../LeftNavBar";
import MoreRulesPage1 from "./MoreRulesPage1";
import "../styles/LearnAndPracticeIndex.css";

const MoreRulesContainer = () => {
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
        case "1": return <MoreRulesPage1 />;
        default: return <div className="page-not-found-text">Page not found</div>;
      }
    };

  return (
    <div className="learn-and-practice-container">
      <LeftNavBar/>

      {renderPage()}
      <NextPageButton onClick={navigateToNextPage}/>
    </div>
  );
};

export default MoreRulesContainer;
