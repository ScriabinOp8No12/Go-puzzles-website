import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../store/modal';
import CloseButton from '../CloseModalButton';

const QuizImage = ({ src, alt }) => {

  const dispatch = useDispatch();

  const handleImageClick = () => {
    const modalContent = (
      <div className="image-modal-wrapper">
      <CloseButton onClick={handleClose} />
      <img
      className="button-hover"
        src={src}
        alt={alt}
        // Move the modal down 47.5 pixels from the top to adjust for the navbar taking up 95 pixels of space, making the modal appear off center
        style={{ maxWidth: '70vw', maxHeight: '70vh', objectFit: 'contain', marginTop: '47.5px' }}
      />
      </div>
    );
    dispatch(openModal(modalContent));
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="quiz-image button-hover"
        onClick={handleImageClick}
      />
      <span className="enlarge-text">Click image to enlarge</span>
    </div>
  );
};

export default QuizImage;
