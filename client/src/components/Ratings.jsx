import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import "regenerator-runtime/runtime";
import ReviewsList from '../components/RatingsComponents/ReviewsList.jsx';


// let reviewsNum = 248; // eventually change these vars to be dynamic

function Ratings () {
  const [reviewsNum, setReviewsNum] = useState(null);

  useEffect(() => {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=40350';
    const fetchReviews = async () => {
      const getReviews = await Axios.get(url, {
        headers: {
          'Authorization': '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'
        }
      });
      const reviews = await getReviews.data;
      console.log(reviews);
    };
    fetchReviews();
  }, []);

  return (
    <div className='reviews'>
      <h3>{`Ratings & Reviews`}</h3>
      <label htmlFor='filter-select'>{`${248} reviews, sorted by `}</label>
      <select id='filter-select'>
        <option defaultValue>relevance</option>
        <option>newest</option>
        <option>helpful</option>
      </select>
      <ReviewsList />
    </div>
  )
}


export default Ratings;