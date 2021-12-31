import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import ReviewsSidebar from './RatingsComponents/ReviewsSidebar/ReviewsSidebar.jsx';
import ReviewsList from '../components/RatingsComponents/ReviewsList/ReviewsList.jsx';
<<<<<<< HEAD
import { token } from '/config.js';
=======
import {token} from '../../../config.js';
>>>>>>> 51c4163b7bfaacc1d8c703a701ed3b6507acbd70

function Ratings () {
  const [productReviews, setProductReviews] = useState({});
  const holder = 40358
  useEffect(() => {
    const url = `http://127.0.0.1:3000/reviews?product_id=${holder}`;
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