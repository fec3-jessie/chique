import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import "regenerator-runtime/runtime";
import ReviewsList from '../components/RatingsComponents/ReviewsList.jsx';
import Token from './Token.jsx';

// let reviewsNum = 248; // eventually change these vars to be dynamic

function Ratings () {
  const [reviewsNum, setReviewsNum] = useState(null);
  const [productReviews, setProductReviews] = useState({});

  useEffect(() => {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=40357';
    const fetchReviews = async () => {
      const getReviews = await Axios.get(url, {
        headers: {
          'Authorization': Token
        }
      });
      const reviews = await getReviews.data;
      setProductReviews(reviews);
      setReviewsNum(reviews.count);
    };
    fetchReviews();
  }, []);

  // const ReviewsContext = React.createContext(productReviews);

  return (
    // <ReviewsContext.Provider value={productReviews}>
      <div className='reviews'>
        <h3>{`Ratings & Reviews`}</h3>
        <label htmlFor='filter-select'>{`${reviewsNum} reviews, sorted by `}</label>
        <select id='filter-select'>
          <option defaultValue>relevance</option>
          <option>newest</option>
          <option>helpful</option>
        </select>
        <ReviewsList reviews={productReviews}/>
      </div>
    // </ReviewsContext.Provider>
  )
}


export default Ratings;