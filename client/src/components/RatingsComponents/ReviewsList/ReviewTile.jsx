import React from 'react';
import { useState } from 'react';
import StarsTile from './StarsTile.jsx';
import UserTimeTile from './UserTimeTile.jsx';
import ReviewBody from './ReviewBody.jsx';
import HelpfulTile from './HelpfulTile.jsx';
import Recommendation from './Recommendation.jsx';
import Response from './Response.jsx';


function ReviewTile (props) {


  return (
    <div className='review-tile'>
      <div className='header-tile'>
        <StarsTile
          stars={props.rating}/>
        <UserTimeTile
          user={props.user}
          time={props.time}/>
      </div>
        <ReviewBody
          body={props.body}
          summary={props.summary}
          photos={props.photos}/>
        {props.recommend === true ?
        <Recommendation rec={props.recommend}/> : null}
        {props.response !== null ?
        <Response response={props.response}/> : null}
        <HelpfulTile
          helpfulnessCount={props.helpfulness}
          reviewId={props.reviewId}/>
    </div>
  )
}


export default ReviewTile;