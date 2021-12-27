import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Token from '../../token.jsx';
// switch to dynamic data after testing...


function HelpfulTile ({helpfulnessCount}) {
  const [yesCount, setYesCount] = useState(helpfulnessCount);
  const [yesClicked, setYesClicked] = useState(false);
  const handleClick = () => {
    if (yesClicked === false) {
      setYesCount(yesCount => yesCount + 1);
      setYesClicked(true);
    }
  }


  // make Yes a post button
  return (
    <div className='helpful-tile'>
      <p>{`Helpful?`}</p>
      <button
        className='yes-button'
        onClick={handleClick}>
        Yes</button>
      <p>{`(${yesCount}) |  Report`}</p>
    </div>
  )
}

export default HelpfulTile;