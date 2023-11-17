import React from 'react';

const PreviousPageButton = ( {onClick}) => {
  return (
    <button onClick={onClick} className="previous-page-button button-hover">
      Previous Page
    </button>
  );
};

export default PreviousPageButton
