import React from 'react';
import axios from 'axios';
import {url, token} from '/config.js'

const RelatedProducts = () => {
  console.log(url);

  axios.get(url, {
    headers: {'Authorization': token}
  })
  return (<div>
    Related Products go here.
    {}
  </div>)
}

export default RelatedProducts;