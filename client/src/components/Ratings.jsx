import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import ReviewsSidebar from './RatingsComponents/ReviewsSidebar/ReviewsSidebar.jsx';
import ReviewsList from '../components/RatingsComponents/ReviewsList/ReviewsList.jsx';

function Ratings ({product_Id, productName}) {
  const [productReviews, setProductReviews] = useState({});
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState([]);
  const [starsFilter, setStarsFilter] = useState([]);
  const [revert, setRevert] = useState(false);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [starsClicked, setStarsClicked] = useState({
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false
  });


  useEffect(() => {
    const url = `http://127.0.0.1:3000/reviews`;
    const params = {product_id: product_Id, count: 50, sort: sort};
    const fetchReviews = async () => {
      const getReviews = await Axios.get(url, {
        params: params
      });
      const data = await getReviews.data;
      setProductReviews(data);
      setReviews(data.results);
    };
    fetchReviews();
  }, [sort, revert, product_Id]);

  const [characteristics, setCharacteristics] = useState({});
  const [factors, setFactors] = useState([]);

  useEffect(() => {
    const url = 'http://127.0.0.1:3000/reviews/meta';
    const params = {product_id: product_Id};

    const fetchMeta = async () => {
      const getMetaData = await Axios.get(url, {
        params: params
      });
      const data = await getMetaData.data.characteristics;
      await setCharacteristics(data);
      let factorsData = [];
      for (const factor in data) {
        factorsData.push(factor);
      }
      setFactors(factorsData);
    };
    fetchMeta();
  }, [reviewsCount, product_Id]);

  useEffect(() => {
    let filtering = [];
    for (const star in starsClicked) {
      if (starsClicked[star] === true) {
        filtering.push(parseInt(star));
      }
    }
    setStarsFilter(filtering);
  }, [starsClicked]);

  useEffect(() => {
    let newList;
    if (starsFilter.length > 0) {
      newList = productReviews.results.filter(result =>
        starsFilter.includes(result.rating)
      );
      setReviews(newList);
    } else {
      setRevert(!revert);
    }
  }, [starsFilter]);


  return (
    <div id = 'reviews'>
      <div className='reviews'>
        <h3>{`Ratings & Reviews`}</h3>
        <div className='reviews-features'>
          {productReviews.product !== undefined ?
            <ReviewsSidebar
              className='reviews-sidebar'
              setStarsClicked={setStarsClicked}
              starsClicked={starsClicked}
              reviewsCount={reviewsCount}
              reviews={reviews}
              productId={productReviews.product}/> : null}
          <ReviewsList
            starsClicked={starsClicked}
            className='reviews-list'
            data={productReviews}
            factors={factors}
            productName={productName}
            reviews={reviews}
            characteristics={characteristics}
            product_Id={product_Id}
            sort={sort}
            setSort={setSort}
            setReviewsCount={setReviewsCount}
            reviewsCount={reviewsCount}/>
        </div>
      </div>
    </div>
  );
}


export default Ratings;