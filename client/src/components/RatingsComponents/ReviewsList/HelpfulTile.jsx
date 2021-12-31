import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { token } from '/config.js';
// switch to dynamic data after testing...


function HelpfulTile ({helpfulnessCount, reviewId}) {
  const [yesCount, setYesCount] = useState(helpfulnessCount);
  const [yesClicked, setYesClicked] = useState(false);
  const reviewUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/helpful?review_id=${reviewId}`;

  const postYesVote = async () => {
    const body = {
      'helpfulness': yesCount
    };
    const postHelpfullness = await Axios.put(reviewUrl, body, {
      headers: {
        'Authorization': token
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (yesClicked === false) {
      setYesCount(yesCount => yesCount + 1);
      setYesClicked(true);
      postYesVote();
    }
  }


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