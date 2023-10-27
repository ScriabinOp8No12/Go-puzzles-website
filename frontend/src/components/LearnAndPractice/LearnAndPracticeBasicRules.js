import {React, useEffect} from "react";
import "./styles/LearnAndPracticeIndex.css";
import { useHistory, useParams } from "react-router-dom";
import LeftNavBar from "./LeftNavBar";
import BasicRulesPage1 from "./BasicRulesPage1";
import BasicRulesPage2 from "./BasicRulesPage2";

const LearnAndPracticeBasicRules = () => {
  const history = useHistory();
  const { pageNumber } = useParams();

  const navigateToNextPage = () => {
    const nextPage = parseInt(pageNumber, 10) + 1;
    history.push(`/learn-and-practice/basic-rules/${nextPage}`);
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
      <LeftNavBar></LeftNavBar>

      {/* Main Content */}
      {
        pageNumber === '1' ? <BasicRulesPage1 /> :
        pageNumber === '2' ? <BasicRulesPage2 /> :
        <div>Page not found</div>
      }
      <button onClick={navigateToNextPage} className="next-page-button">
        Next Page
      </button>
    </div>
  );
};

export default LearnAndPracticeBasicRules;
