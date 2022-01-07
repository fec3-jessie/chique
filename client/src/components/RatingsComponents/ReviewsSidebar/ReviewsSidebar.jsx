import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import AverageRating from './AverageRating.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingFactors from './RatingFactors.jsx';
const { localhost } = require('/config.js');

function ReviewsSidebar ({productId, starsClicked, setStarsClicked, reviewsCount, reviews}) {
  const [productMetaData, setProductMetaData] = useState({});

  useEffect(() => {
    const url = `${localhost}/reviews/meta`;
    const params = {product_id: productId};

    const fetchMeta = async () => {
      const getMetaData = await Axios.get(url, {
        params: params
      });
      const data = await getMetaData.data;
      setProductMetaData(data);
    };
    fetchMeta();
  }, [reviewsCount, reviews]);

  const renderComponents = () => {
    return (
      <div className='sidebar-components'>
        <AverageRating ratings={productMetaData.ratings}/>
        <PercentRecommended recommended={productMetaData.recommended}/>
        <RatingBreakdown ratings={productMetaData.ratings}
          setStarsClicked={setStarsClicked}
          starsClicked={starsClicked}/>
        <RatingFactors characteristics={productMetaData.characteristics} />
      </div>
    );
  };

  return (
    <div className='reviews-sidebar'>
      {productMetaData.ratings !== undefined ?
        renderComponents() : null}
    </div>
  );
}

export default ReviewsSidebar;

