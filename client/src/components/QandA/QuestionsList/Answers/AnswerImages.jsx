import React from 'react';

const AnswerImages = ({ photos, answer_id }) => {
  return (
    <div>
      {photos.map((image, index) =>
        <img
          id='QA-answer-image'
          key={answer_id * -2 + index}
          src={image}
        />
      )}
    </div>
  );
};

export default AnswerImages;