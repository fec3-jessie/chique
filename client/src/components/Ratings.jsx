import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import ReviewsList from '../components/RatingsComponents/ReviewsList/ReviewsList.jsx';
import Token from './token.jsx';

function Ratings () {
  const [productReviews, setProductReviews] = useState({});

  useEffect(() => {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=40359';
    const fetchReviews = async () => {
      const getReviews = await Axios.get(url, {
        headers: {
          'Authorization': Token
        }
      });
      const reviews = await getReviews.data;
      setProductReviews(reviews);
    };
    fetchReviews();
  }, []);


  return (
      <div className='reviews'>
        <h3>{`Ratings & Reviews`}</h3>
        <ReviewsList reviews={productReviews}/>
      </div>
  )
}


export default Ratings;