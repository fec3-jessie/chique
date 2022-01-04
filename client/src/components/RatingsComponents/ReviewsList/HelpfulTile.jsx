import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { token } from '/config.js';
// switch to dynamic data after testing...


function HelpfulTile ({helpfulnessCount, reviewId, setReviewsCount}) {
  const [yesCount, setYesCount] = useState(helpfulnessCount);
  const [yesClicked, setYesClicked] = useState(false);
  const [reported, setReported] = useState(false);
  const localHost = 'http://127.0.0.1:3000';

  const reviewUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/helpful?review_id=${reviewId}`;


  const postYesVote = () => {
    const body = {
      'helpfulness': yesCount
    };
    Axios.put(`http://127.0.0.1:3000/reviews/${reviewId}/helpful`, body, {
      params: {
        review_id: reviewId
      }
    })
      .catch((err) => console.error('error putting helpful::::', err));
  };

  // this one working
  const handleReported = () => {
    Axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/report?review_id=${reviewId}`,
      headers: {
        'Authorization': token
      }
    })
      .then(() => console.log('you have reported review # ', reviewId))
      .catch((err) => console.log('error reporting review', err));
    setReviewsCount(prevState => prevState -1);
  };

  // this one not working
  // const handleReported = () => {
  //   Axios.put(`http://127.0.0.1:3000/reviews/${reviewId}/report`, {
  //     params: {
  //       review_id: reviewId
  //     }
  //   })
  //     .catch((err) => console.error('error putting report::::', err));
  //   setReviewsCount(prevState => prevState - 1);
  // };
  // const handleReported = () => {
  //   Axios({
  //     method: 'put',
  //     url: `http://127.0.0.1:3000/reviews/${reviewId}/report`,
  //     params: {
  //       review_id: reviewId
  //     }
  //   })
  //     .catch((err) => console.error('error putting report::::', err));
  //   setReviewsCount(prevState => prevState - 1);
  // };


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
  }

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
  )
}

export default HelpfulTile;