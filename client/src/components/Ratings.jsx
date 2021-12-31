import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import ReviewsSidebar from './RatingsComponents/ReviewsSidebar/ReviewsSidebar.jsx';
import ReviewsList from '../components/RatingsComponents/ReviewsList/ReviewsList.jsx';
import {token} from '../../../config.js';

function Ratings () {
  const [productReviews, setProductReviews] = useState({});

  useEffect(() => {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=40358';
    const fetchReviews = async () => {
      const getReviews = await Axios.get(url, {
        headers: {
          'Authorization': token
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
        <div className='reviews-features'>
          {productReviews.product !== undefined ?
          <ReviewsSidebar className='reviews-sidebar' productId={productReviews.product}/> : null}
          <ReviewsList className='reviews-list' reviews={productReviews}/>
        </div>
      </div>
  )
}


export default Ratings;