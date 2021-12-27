import React from 'react';

// switch to dynamic data after testing...


function HelpfulTile ({helpfulnessCount}) {


  // make Yes a post button
  return (
    <div className='helpful-tile'>
      <p>{`Helpful?`}</p>
      <button>Yes</button>
      <p>{`(${helpfulnessCount}) |  Report`}</p>
    </div>
  )
}

export default HelpfulTile;