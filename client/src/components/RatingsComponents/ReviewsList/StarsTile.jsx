import React from 'react';
import { useState } from 'react';



function StarsTile ({stars}) {
  const starPercent = (stars / 5) * 100;
  const roundedPercent = `${(Math.round(starPercent / 10) * 10)}%`;

  return (
    <div className='stars-tile' >
      <div className='stars-outer'>
        <div className='stars-inner' style={{width: roundedPercent}}></div>
      </div>
    </div>
  )
}


export default StarsTile;
