import React from 'react';
import { useState } from 'react';
import ReviewsList from '../components/RatingsComponents/ReviewsList.jsx';

let reviewsNum = 248; // eventually change these vars to be dynamic

function Ratings () {

  return (
    <div className='reviews'>
      <h3>{`Ratings & Reviews`}</h3>
      <label for='filter-select'>{`${reviewsNum} reviews, sorted by `}</label>
      <select id='filter-select'>
        <option selected>relevance</option>
        <option>newest</option>
        <option>helpful</option>
      </select>
      <ReviewsList />
    </div>
  )
}


export default Ratings;