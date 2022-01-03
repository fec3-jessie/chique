import React from 'react';

function StarRating (props) {
  const starPercent = (props.rating / 5) * 100;
  const roundedPercent = `${(Math.round(starPercent / 10) * 10)}%`;

  return (
    <div className='stars-tile' >
      <div className='stars-outer'>
        <div className='stars-inner' style={{width: roundedPercent}}></div>
      </div>
    </div>
  );
}


export default StarRating;
