import React from 'react';
import { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';


function ReviewsList ({reviews}) {
  return (
    <div className='reviews-list'>
      {console.log(reviews)}
      {reviews?.results?.map((review) => {
        return <ReviewTile
          rating={review.rating}
          key={review.review_id}
          user={review.reviewer_name}
          time={review.date}
          body={review.body}
          summary={review.summary}
          recommend={review.recommend}
          response={review.response}
          photos={review.photos}
          helpfulness={review.helpfulness}/>
      })}
    </div>
  )
}


export default ReviewsList;