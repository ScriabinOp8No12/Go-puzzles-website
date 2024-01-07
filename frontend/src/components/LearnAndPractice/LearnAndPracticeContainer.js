import React from "react";
import { useParams } from "react-router-dom";
import BasicRulesContainer from "./BasicRules/BasicRulesContainer";
import MoreRulesContainer from "./MoreRules/MoreRulesContainer";
import ReadingContainer from "./Reading/ReadingContainer";
import ExternalResources from "../ExternalResources";

const LearnAndPracticeContainer = () => {
  const { section } = useParams();

  const renderSection = () => {
    switch (section) {
      case "basic-rules":
        return <BasicRulesContainer />;
      case "more-rules":
        return <MoreRulesContainer />;
      case "reading":
        return <ReadingContainer />;
      case "external-resources":
        return <ExternalResources />;
      default:
        return <div>Section not found</div>;
    }
  };

  return <div>{renderSection()}</div>;
};

export default LearnAndPracticeContainer;
