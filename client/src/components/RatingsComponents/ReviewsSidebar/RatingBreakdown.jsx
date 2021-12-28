import React from 'react';
import StarBar from './StarBar.jsx';

function RatingBreakdown ({ratings}) {
  let starsCounts = [];
  for (const key in ratings) {
    starsCounts.push(key);
  }
  return (
    <div>
      {starsCounts.map((star) => {
        return (
          <div key={star} className='stars-bar-container'>
            <p className='stars-bar-label' key={star}>{`${star}`}</p>
            <p className='stars-bar-label'>{`stars`}</p>
            <StarBar className='stars-bar' ratings={ratings} key={-star} star={star}/>
          </div>
        )
      })}

    </div>
  )
}

export default RatingBreakdown;