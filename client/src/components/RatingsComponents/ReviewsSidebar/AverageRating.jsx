import React from 'react';
import StarsTile from '../ReviewsList/StarsTile.jsx';
function AverageRating ({ratings}) {

  const calculateRating = (ratingsObj) => {
    let result = 0;
    let totalVotes = 0;
    for (const key in ratingsObj) {
      let currVal = parseInt(ratingsObj[key]);
      let currKey = parseInt(key);
      totalVotes += currVal;
      result += (currVal * currKey);
    }
    let roundedResult = Math.round((result / totalVotes) * 10) / 10;
    return roundedResult;
  };

  const average = calculateRating(ratings);

  return (
    <div className='average-rating-container'>
      <div className='numerical-rating'>{average}</div>
      <StarsTile className='average-stars' stars={average} />
    </div>
  );
}

export default AverageRating;