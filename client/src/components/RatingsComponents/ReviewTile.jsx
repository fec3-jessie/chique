import React from 'react';
import { useState } from 'react';
import StarsTile from './StarsTile.jsx';
import UserTimeTile from './UserTimeTile.jsx';
import ReviewBody from './ReviewBody.jsx';
import HelpfulTile from './HelpfulTile.jsx';
import Recommendation from './Recommendation.jsx';
import Response from './Response.jsx';

//eventually make rec/ response conditional etc...

function ReviewTile (props) {


  return (
    <div className='review-tile'>
      <h3>this is a single review tile.</h3>
      <div className='header-tile'>
        <StarsTile stars={props.rating}/>
        <UserTimeTile user={props.user} time={props.time}/>
      </div>
        <ReviewBody />
        <Recommendation />
        <Response />
        <HelpfulTile />
    </div>
  )
}


export default ReviewTile;