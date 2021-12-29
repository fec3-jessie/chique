import React from 'react';
import StarBar from './StarBar.jsx';


function RatingBreakdown ({ratings}) {
  let starsCounts = ['1', '2', '3', '4', '5'];
  return (
    <div className='stars-breakdown-container'>
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