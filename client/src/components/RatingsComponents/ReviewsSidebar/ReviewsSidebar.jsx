import React from 'react';
import AverageRating from './AverageRating.jsx';

function ReviewsSidebar ({productId}) {

  // create axios fetch request to grab meta data from productid
  // store data with usestate then give it to average rating
  // eventually pull in stars component here and give its own classname for styles

  return (
    <div className='reviews-sidebar'>
      <h5>This is the main sidebar</h5>
      <AverageRating />
    </div>
  )
}

export default ReviewsSidebar;
61