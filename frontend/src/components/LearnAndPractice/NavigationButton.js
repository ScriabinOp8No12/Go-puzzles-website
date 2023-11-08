import React from 'react';

const NavigationButton = ( {onClick}) => {
  return (
    <button onClick={onClick} className="next-page-button">
      Next Page
    </button>
  );
};

export default NavigationButton;
