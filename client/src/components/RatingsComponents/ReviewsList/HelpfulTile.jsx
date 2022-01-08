import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
const { localhost } = require('/config.js');

function HelpfulTile ({helpfulnessCount, reviewId, setReviewsCount}) {
  const [yesCount, setYesCount] = useState(helpfulnessCount);
  const [yesClicked, setYesClicked] = useState(false);
  const [reported, setReported] = useState(false);


  const postYesVote = () => {
    const body = {
      'helpfulness': yesCount
    };
    Axios.put(`${localhost}/reviews/${reviewId}/helpful`, body, {
      params: {
        review_id: reviewId
      }
    })
      .catch((err) => console.error('error putting helpful::::', err));
  };

  const handleReported = () => {
    Axios.put(`${localhost}/reviews/${reviewId}/report`, {}, { params: { review_id: reviewId }})
      .then(() => console.log('you have reported review # ', reviewId))
      .catch((err) => console.log('error reporting review', err));
    setReviewsCount(prevState => prevState - 1);
  };

  const handleYesClick = (e) => {
    e.preventDefault();
    if (yesClicked === false) {
      setYesCount(yesCount => yesCount + 1);
      setYesClicked(true);
      postYesVote();
    }
  };

  const reportedStyles = {
    'textDecoration': 'underline'
  };

  const nonReportedStyles = {
    'textDecoration': 'none'
  };

  return (
    <div className='helpful-tile'>
      <p>{`Helpful?`}</p>
      <button
        className='yes-button'
        onClick={handleYesClick}>
        Yes
      </button>
      <p>{`( ${yesCount} ) | `}
        <span
          className='reported'
          onClick={() => {
            setReported(true);
            handleReported();
          }}
          style={reported ? reportedStyles : nonReportedStyles}>
        Report
        </span>
      </p>
    </div>
  );
}

export default HelpfulTile;