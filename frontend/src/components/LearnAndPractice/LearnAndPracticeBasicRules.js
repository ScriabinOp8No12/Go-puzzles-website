import {React, useEffect} from "react";
import "./styles/LearnAndPracticeIndex.css";
import { useHistory, useParams } from "react-router-dom";
import LeftNavBar from "./LeftNavBar";
import BasicRulesPage1 from "./BasicRulesPage1";
import BasicRulesPage2 from "./BasicRulesPage2";
import BasicRulesPage3 from "./BasicRulesPage3";
import BasicRulesPage4 from "./BasicRulesPage4";
import BasicRulesPage5 from "./BasicRulesPage5";
import BasicRulesPage6 from "./BasicRulesPage6";
import BasicRulesPage7 from "./BasicRulesPage7";
import BasicRulesPage8 from "./BasicRulesPage8";

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
        pageNumber === '3' ? <BasicRulesPage3 /> :
        pageNumber === '4' ? <BasicRulesPage4 /> :
        pageNumber === '5' ? <BasicRulesPage5 /> :
        pageNumber === '6' ? <BasicRulesPage6 /> :
        pageNumber === '7' ? <BasicRulesPage7 /> :
        pageNumber === '8' ? <BasicRulesPage8 /> :
        <div>Page not found</div>
      }
      <button onClick={navigateToNextPage} className="next-page-button">
        Next Page
      </button>
    </div>
  );
};

export default LearnAndPracticeBasicRules;
