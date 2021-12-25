import React from 'react';
import { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';

let thirtyReviews = new Array(30).fill(<ReviewTile />);


function ReviewsList ({reviews}) {
  return (
    <div className='reviews-list'>
      {console.log(reviews)}
      {reviews?.results?.map((review) => {
        return <ReviewTile rating={review.rating}
          key={review.review_id}/>
      })}
    </div>
  )
}


export default ReviewsList;