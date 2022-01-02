import React from 'react';
// import star from './stars/star.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import quarter from './/stars/quarter.png';
// import star from './stars/star.png';
// import half from './stars/half.png';
// import threeQuarter from './stars/threeQuarter.png';
import token from '../../../../config.js';

// import { faThin } from '@fortawesome/free-solid-svg-icons'




class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    // get rating rated to nearest .25
    var roundedRating = (Math.round(this.props.rating * 4) / 4).toFixed(2);
    var wholeStars = Math.floor(roundedRating);
    var filledStars = 0;
    var output = [];

    // push corresponding number of stars to "output" variable
    while (filledStars < roundedRating) {
      output.push(<img id = 'star' src = {star}/>);
      filledStars++;
      if (filledStars === Math.floor(roundedRating)) {
        if (roundedRating.toString().slice(-2) === '25') {
          output.push(<img id = 'quarter' src = {quarter}/>);
          filledStars += 0.25;
        }
        if (roundedRating.toString().slice(-2) === '50') {
          output.push(<img id = 'half' src = {half}/>);
          filledStars += 0.50;
        }
        if (roundedRating.toString().slice(-2) === '75') {
          output.push(<img id = 'three-quarter' src = {threeQuarter}/>);
          filledStars += 0.75;
        }
      }
    }

    console.log(output);

    return (
      <div>
        {output}
      </div>
    );
  }
}

export default StarRating;