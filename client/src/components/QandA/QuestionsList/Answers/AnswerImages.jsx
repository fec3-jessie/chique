import React from 'react';

const AnswerImages = ({ photos }) => {
  return (
    <div>
      {photos.map(image =>
        <img id='Image-Answer' src={image} />
      )}
    </div>
  );
}

export default AnswerImages;