import React from 'react';

const NextPageButton = ( {onClick}) => {
  return (
    <button onClick={onClick} className="next-page-button button-hover">
      Next Page
    </button>
  );
};

export default NextPageButton;
