import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
const { localhost } = require('/config.js');


const RelatedProducts = (props) => {

  const [productId, setProductId] = useState(props.product_Id);
  const [mainFeatures, setMainFeatures] = useState([]);
  const [products, setProducts] = useState([]);
  // const [productId, setProductId] = useState(props.product_Id);
  // setProductId(product_Id_upstream);

  useEffect(() =>{
    axios.get(`${localhost}/products/${productId}/related`)
      .then(res => {
        axios.get(`${localhost}/products/`)
          .then(products => products.data.filter(product => res.data.includes(product.id)))
          .then(filteredProducts => setProducts(filteredProducts));
      })
      .then(() => {
        axios.get(`${localhost}/products/${productId}`)
          .then((res) => {
            setMainFeatures(res.data.features);
          });
      });
  }, [productId]);

  return (<div>
    <h3>Related Products</h3>
    <div className='related-products' >
      {products.length !== 0 ?
        products.map(product => (
          <ProductCard
            product = {product}
            key = {product.id}
            mainFeatures = {mainFeatures}
            relatedClickHandler = {props.relatedClickHandler}
            setProductId = {setProductId}/>
        ))
        : null}
    </div>
  </div>);
};

export default RelatedProducts;