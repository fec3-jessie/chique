import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {token} from '/config.js';
import ProductCard from './ProductCard.jsx';
const url = 'http://localhost:3000';


const RelatedProducts = (props) => {

  const [products, setProducts] = useState([]);
  const productId = props.product_Id;

  useEffect(() =>{
    axios.get(`${url}/products/${productId}/related`)
      .then(res => {
        axios.get(`${url}/products/`)
          .then(products => products.data.filter(product => res.data.includes(product.id)))
          .then(filteredProducts => setProducts(filteredProducts));
      });
  }, []);

  return (<div>
    <h3>Related Products</h3>
    <div className='related-products' >
      {products.length !== 0 ?
        products.map(product => (
          <ProductCard
            product = {product}
            key = {product.id}
            relatedClickHandler = {props.relatedClickHandler}/>
        ))
        : null}
    </div>
  </div>);
};

export default RelatedProducts;