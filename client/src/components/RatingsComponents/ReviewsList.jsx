import React from 'react';
import { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';

let thirtyReviews = new Array(30).fill(<ReviewTile />);
let reviewsNum = 248; // eventually change these vars to be dynamic

function ReviewsList () {

  return (
    <div className='reviews-list'>
      <label for='filter-select'>{`${reviewsNum} reviews, sorted by `}</label>
      <select id='filter-select'>
        <option selected>relevance</option>
        <option>newest</option>
        <option>helpful</option>
      </select>
      {thirtyReviews}
    </div>
  )
}


export default ReviewsList;