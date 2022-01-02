import React, {useState} from 'react';
import StarBar from './StarBar.jsx';


function RatingBreakdown ({ratings}) {
  let starsCounts = ['1', '2', '3', '4', '5'];
  const [starsClicked, setStarsClicked] = useState({
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false
  });
  const starClickedStyles = {
    'text-decoration': 'underline'
  };
  const starUnClickStyles = {
    'text-decoration': 'none'
  };

  return (
    <div className='stars-breakdown-container'>
      {starsCounts.map((star) => {
        return (
          <div key={star} className='stars-bar-container'>
            <a className='stars-bar-label'
              onClick={(e) => {
                setStarsClicked(prevState => ({
                  ...prevState,
                  [star] : !prevState[star]
                }));
              }}
              key={star}>{`${star}`}
              <span className='star-span'
                style={starsClicked[star] === true ? starClickedStyles : starUnClickStyles}>
                stars
              </span>
            </a>
            <StarBar className='stars-bar' ratings={ratings} key={-star} star={star}/>
          </div>
        )
      })}
    </div>
  )
}

export default RatingBreakdown;