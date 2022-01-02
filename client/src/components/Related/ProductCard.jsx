import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {token} from '/config.js';
import StarsTile from '/client/src/components/RatingsComponents/ReviewsList/StarsTile.jsx';
import PriceLine from './PriceLine.jsx';
const url = 'http://localhost:3000';

const ProductCard = (props) => {
  const item = props.product;
  const [defaultStyle, setDefaultStyle] = useState({});
  const [starAverage, setStarAverage] = useState(0);

  useEffect(() => {
    axios.get(`${url}/products/${item.id}/styles`, {
      headers: { 'Authorization': token }
    })
    .then(res => {
      let styles = res.data.results;
      const [style] = styles.filter(style => style['default?'] === true);
      setDefaultStyle(style);
    })
    .then(() => {
      axios.get(`${url}/reviews/meta?product_id=${item.id}`, {
        headers: { 'Authorization': token }
      })
      .then(res => {
        const ratings = res.data.ratings;
        let [score, reviews] = [0, 0];
        for (const key in ratings) {
          reviews += parseInt(ratings[key]); //adds review count to denominator
          score += parseInt(ratings[key]) * parseInt(key); //adds score to numerator
        }
        const value = Math.round(score/reviews * 100) / 100; //rounds to two places
        setStarAverage(value);
      })
    })
  }, [])


  return (<div className='product-card'>
    <div className='card-frame'>
      <img className='related-img' src = {defaultStyle.photos?.[0].thumbnail_url || 'https://png.vector.me/files/images/1/5/151985/none_icon_available_no_unavailable_preview.jpg'}/>
    </div>
    <div className='card-details'>
      <span className='card-category'>{item.category}</span><br></br>
      <span className='card-name'>{item.name}</span><br></br>
      <PriceLine
        originalPrice = {defaultStyle.original_price}
        salePrice={defaultStyle.sale_price}
      /><br></br>
      <StarsTile stars ={starAverage} />
    </div>
  </div>)
}

export default ProductCard;