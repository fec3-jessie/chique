import React from 'react';

// switch to dynamic data after testing...
let helpfulChoice = 'Yes';
let helpfulCount = 10;

function HelpfulTile () {

  return (
    <div className='helpful-tile'>
      <p>{`Helpful? ${helpfulChoice}(${helpfulCount}) |  Report`}</p>
    </div>
  )
}

export default HelpfulTile;