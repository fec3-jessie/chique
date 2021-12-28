import React from 'react';

function StarBar ({ratings, star}) {
  // calculate star percent
  // use this % to determin bar fill for bar
  let total = 0;
  let starCount;
  let bgc = '#124B3A';
  let starPercent;
  for (const key in ratings) {
    total+= parseInt(ratings[key]);
    if (key === star) {
      starCount = parseInt(ratings[key]);
    }
  }

  if (starCount === undefined) {
    starPercent = 0;
  } else {
    starPercent = Math.round((starCount / total) * 100);
  }


  const barStyles = {
    height: 15,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    margin: 15
  };

  const barFillerStyles = {
    height: '100%',
    width: `${starPercent}%`,
    backgroundColor: bgc,
    borderRadius: 'inherit',

  }
  console.log('these are the ratings::::', ratings);
  return (
    <div style={barStyles}>
      <div style={barFillerStyles}></div>
    </div>
  )
}

export default StarBar;