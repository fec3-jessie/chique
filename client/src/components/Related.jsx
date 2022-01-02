import React from 'react';
import RelatedProducts from './Related/RelatedProducts.jsx';
import YourOutfit from './Related/YourOutfit.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (<div>
      <RelatedProducts />
      <YourOutfit />
    </div>);
  }
}

export default Related;