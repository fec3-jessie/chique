import React from 'react';
import RelatedProducts from './Related/RelatedProducts.jsx';
import YourOutfit from './Related/YourOutfit.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log('Related.jsx');
    console.log(this.props);
    console.log(typeof this.props.relatedClickHandler);
    return (<div>
      <RelatedProducts relatedClickHandler = {this.props.relatedClickHandler} />
      <YourOutfit />
    </div>);
  }
}

export default Related;