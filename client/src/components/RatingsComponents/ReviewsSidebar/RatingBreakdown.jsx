import React from 'react';

function RatingBreakdown ({ratings}) {
  let starsCounts = [];
  for (const key in ratings) {
    starsCounts.push(key);
  }
  return (
    <div>
      {/* <h4>THis is the breakdown container</h4> */}
      {starsCounts.map((star) => {
        return (
          <div className='stars-bar-container'>
            <p>{`${star} stars`}</p>
            <p>---this will be a stars bar</p>
          </div>
        )
      })}
    </div>
  )
}

export default RatingBreakdown;