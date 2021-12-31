import React from 'react';

const AnswerImages = ({ photos, ID }) => {
  return (
    <div>
      {photos.map((image, index) =>
        <img
          id='Image-Answer'
          key={ID * -2 + index}
          src={image}
        />
      )}
    </div>
  );
}

export default AnswerImages;