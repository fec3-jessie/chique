import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {url, token} from '/config.js'

const RelatedProducts = () => {

  const [products, setProducts] = useState([]);
  const productId = '40344';
  console.log(productId);

  useEffect(() =>{
    console.log('getting related products...')
    axios.get(`${url}/products/${productId}/related`, {
      headers: { 'Authorization': token }
    })
    .then(res => {
      console.log(res.data);
      axios.get(`${url}/products/`, {
        headers: { 'Authorization': token }
      })
      // .then(products => console.log(products))
      .then(products => products.data.filter(product => res.data.includes(product.id)))
      .then(filteredProducts => setProducts(filteredProducts))
    });
  }, []);

  return (<div>
    <h3>Related Products</h3>
    {products.length !== 0 ? products.map(product => product.id) : null}
  </div>)
}

export default RelatedProducts;