import React from 'react';

// Pass isTutorial prop so we can style the tutorial's previous page button to be far more left from the bottom left corner of the page
const PreviousPageButton = ( {onClick, isTutorial}) => {

// Add a specific class if it's used in the tutorial
const buttonClass = isTutorial
? "previous-page-button tutorial-button button-hover "
: "previous-page-button button-hover";

  return (
    <button onClick={onClick} className={buttonClass}>
      Previous Page
    </button>
  );
};

export default PreviousPageButton
