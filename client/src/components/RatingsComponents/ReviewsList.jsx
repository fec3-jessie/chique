import React from 'react';
import { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';


function ReviewsList ({reviews}) {
  return (
    <div className='reviews-list'>
      {console.log(reviews)}
      {reviews?.results?.map((review) => {
        return <ReviewTile rating={review.rating}
          key={review.review_id}
          user={review.reviewer_name}/>
      })}
    </div>
  )
}


export default ReviewsList;