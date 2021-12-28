import React from 'react';

function StarBar ({ratings, star}) {
  // calculate total nuber of ratings
  // calculate star percent
  // use this % to determin bar fill for bar
  let bgc = '#124B3A';
  let starPercent = 75;

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
    // <p>---this will be a stars bar</p>
    <div style={barStyles}>
      <div style={barFillerStyles}></div>
    </div>
  )
}

export default StarBar;