import React from 'react';
import { useParams } from 'react-router-dom';
import BasicRulesContainer from './BasicRules/BasicRulesContainer';
import MoreRulesContainer from './MoreRules/MoreRulesContainer';
import ExternalResources from '../ExternalResources';

const LearnAndPracticeContainer = () => {
  const { section } = useParams();

  const renderSection = () => {
    switch (section) {
      case 'basic-rules':
        return <BasicRulesContainer />;
      case 'more-rules-and-strategy':
        return <MoreRulesContainer />;
      case 'external-resources':
        return <ExternalResources/>
      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div>
      {renderSection()}
    </div>
  );
};

export default LearnAndPracticeContainer;
