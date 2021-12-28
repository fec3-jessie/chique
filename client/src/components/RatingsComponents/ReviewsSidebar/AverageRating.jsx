import React from 'react';

function AverageRating ({ratings}) {

  const calculateRating = (ratings) => {
    let result = 0;
    let totalVotes = 0;
    for (const key in ratings) {
      let currVal = parseInt(ratings[key]);
      let currKey = parseInt(key);
      totalVotes+= currVal;
      result+= (currVal * currKey);
    }
    let roundedResult = Math.round((result/totalVotes) * 10) / 10;
    return roundedResult;
  }

  return (
    <div>this is an average</div>
  )
}

export default AverageRating;