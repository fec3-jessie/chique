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
    return result/totalVotes;
  }
  // create function to only include first decimal of result
  return (
    <div>this is an average</div>
  )
}

export default AverageRating;