import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/modal';

const QuizImage = ({ src, alt }) => {
  const dispatch = useDispatch();

  const handleImageClick = () => {
    const modalContent = (
      <img
        src={src}
        alt={alt}
        // Move the modal down 50 pixels from the top to adjust for the navbar taking up 95 pixels of space, making the modal appear off center
        style={{ maxWidth: '70vw', maxHeight: '70vh', objectFit: 'contain', marginTop: '47.5px' }}
      />
    );
    dispatch(openModal(modalContent));
  };

  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="quiz-image"
        onClick={handleImageClick}
      />
      <span className="enlarge-text">Click image to enlarge</span>
    </div>
  );
};

export default QuizImage;
