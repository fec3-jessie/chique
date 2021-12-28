import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {url, token} from '/config.js';

const ProductCard = (props) => {
  const item = props.product;
  const [defaultStyle, setDefaultStyle] = useState({});
  // const [thumbnail, setThumbnail] =  useState([]);

  useEffect(() => {
    axios.get(`${url}/products/${item.id}/styles`, {
      headers: { 'Authorization': token}
    })
    .then(res => {
      let styles = res.data.results;
      const [style] = styles.filter(style => style['default?'] === true);
      console.log(style);
      return style;
    })
    .then(style => {
      setDefaultStyle(style);
      return style;
    })
  }, [])


  return (<div>
    {defaultStyle.photos !== undefined ?
    <img src = {defaultStyle.photos[0].thumbnail_url}/>
    : <h5>image unavailable</h5> }
    <br></br>
    {item.category}: {item.name}
    <br></br>
    ${defaultStyle.original_price}
    <br></br>
  </div>)
}

export default ProductCard;