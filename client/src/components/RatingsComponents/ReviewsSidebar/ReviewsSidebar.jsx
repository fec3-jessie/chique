import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import AverageRating from './AverageRating.jsx';
import Token from '../../token.jsx';

function ReviewsSidebar ({productId}) {
  const [productMetaData, setProductMetaData] = useState({});

  // eventually pull in stars component here and give its own classname for styles
  useEffect(() => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${productId}`;

    const fetchMeta = async () => {
      const getMetaData = await Axios.get(url, {
        headers: {
          'Authorization': Token
        }
      });
      const data = await getMetaData.data;
      setProductMetaData(data);
      console.log(data);
    };
    fetchMeta();
  }, []);

  return (
    <div className='reviews-sidebar'>
      {/* <h5>This is the main sidebar</h5> */}
      {productMetaData.ratings !== undefined ?
        <AverageRating ratings={productMetaData.ratings}/> : null}
    </div>
  )
}

export default ReviewsSidebar;

