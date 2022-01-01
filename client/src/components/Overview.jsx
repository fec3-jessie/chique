import React from 'react';
// import StarRating from './OverviewComponents/StarRating.js';
import Reviews from './OverviewComponents/Reviews.js';
import axios from 'axios';
import {token} from '../../../config.js';
import StyleSelector from './OverviewComponents/StyleSelector.js';
// import ImageGallery from '/Users/danielghaly/Desktop/Hack Reactor/fec3/client/src/components/OverviewComponents/ImageGallery.js'
import AddToCart from './OverviewComponents/AddToCart.js';
import ProductDescription from './OverviewComponents/ProductDescription.js';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfReviews: null,
      rating: null,
      productName: null,
      productCategory: null,
      productPrice: null,
      thumbnails: [],
      styles: [],
      selectedStyle: 0,
      sizes: [],
      outOfStock: null,
      selectedSize: null,
      quantity: null,
      results: null,
      validATC: null,
      productDescription: null,
      productSlogan: null

    };
  }

  componentDidMount() {




    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344', {
      headers: {
        authorization: token
      }
    })
      .then(res => {
        this.setState({numberOfReviews: res.data.results.length});

        var sum = 0;
        res.data.results.forEach(item => {
          sum += item.rating;
        });
        var rating = sum / (res.data.results.length);
        this.setState({rating: rating});
      });

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344', {
      headers: {
        authorization: token
      }
    })
      .then(res => {
        this.setState({productName: res.data.name});
        this.setState({productCategory: res.data.category});
        this.setState({productDescription: res.data.description});
        this.setState({productSlogan: res.data.slogan});
        this.setState({productPrice: res.data.default_price});

      });



    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', {
      headers: {
        authorization: token
      }
    })
      .then(res => {


        // maintain styles API results in state, so that I can use it later in lifecycle
        this.setState({results: res.data.results});


        // initialize available sizes of default style
        var style = res.data.results[0];
        var styleSkus = style.skus;
        var sizesArr = [];
        for (var sku in styleSkus) {
          if (!sizesArr.includes(styleSkus[sku].size)) {
            sizesArr.push(styleSkus[sku].size);
          }
        }
        this.setState({sizes: sizesArr});


        // initialize quantity of default style and selected size
        var style = res.data.results[0];
        var styleSkus = style.skus;
        var quantity = 0;
        for (var sku in styleSkus) {
          if (styleSkus[sku].size === this.state.selectedSize) {
            quantity += styleSkus[sku].quantity;
          }
        }
        this.setState({quantity: quantity});


        // render thuumbnails and available sizes of default style

        var urls = [];

        res.data.results.forEach( (style, i) => {
          urls.push( {url: style.photos[0]['thumbnail_url'], index: i});
        });
        this.setState({thumbnails: urls});
      });


  }


  handleStyleClick(e) {

    // update available sizes upon clicking new style
    this.setState({selectedStyle: event.target.getAttribute('id')}, () => {
      var style = this.state.results[Number(this.state.selectedStyle)];
      var styleSkus = style.skus;
      var sizesArr = [];
      for (var sku in styleSkus) {
        if (!sizesArr.includes(styleSkus[sku].size)) {
          sizesArr.push(styleSkus[sku].size);
        }
      }
      this.setState({sizes: sizesArr});


      // toggle "outOfStock" boolean if quantity of currently selected style === 0

      var quantity = 0;
      for (var sku in styleSkus) {
        quantity += styleSkus[sku].quantity;
      }
      if (quantity === 0) {
        this.setState({outOfStock: true});
      } else {
        this.setState({outOfStock: null});
      }
    });
  }


  handleSizeSelect(e) {

    // update selectedSize state back to null if user presses "Select Size"
    if (e.target.value === 'Select Size') {
      this.setState({selectedSize: null});
      return;
    }

    // update selectedSize state and render quantity of given style/size combination selected
    this.setState({selectedSize: e.target.value}, () => {
      var style = this.state.results[this.state.selectedStyle];
      var styleSkus = style.skus;
      var quantity = 0;
      for (var sku in styleSkus) {
        if (styleSkus[sku].size === this.state.selectedSize) {
          quantity += styleSkus[sku].quantity;
        }
      }
      this.setState({quantity: quantity});
    });



  }


  handleAddToCart() {
    // check for invalid add to cart (ATC)
    if (this.state.selectedSize === null || this.state.selectedStyle === null) {
      this.setState({validATC: false});
    } else {
      this.setState({validATC: true});
    }
  }




  render () {


    return (
      <div>
        {/* <StarRating rating ={this.state.rating}/> */}
        <Reviews numberOfReviews = {this.state.numberOfReviews} />
        <div id = 'category-overview'>{this.state.productCategory}</div>
        <div id = 'product-name-overview'>{this.state.productName}</div>
        <div id = 'price-overview'>${this.state.productPrice}</div>

        {/* {this.state.results.sale_price ?
        <>
        <div id = 'price-overview'>${this.state.productPrice}</div>
        <div id = 'price-overview'>${this.state.results[Number(selectedStyle)].sale_price}</div>
        </>

        : '' } */}

        <StyleSelector results = {this.state.results} selectedStyle = {this.state.selectedStyle} handleStyleClick = {this.handleStyleClick.bind(this)} thumbnails = {this.state.thumbnails} />
        {/* <ImageGallery/> */}
        <AddToCart validATC = {this.state.validATC} handleAddToCart = {this.handleAddToCart.bind(this)} handleSizeSelect = {this.handleSizeSelect.bind(this)} quantity = {this.state.quantity} sizes = {this.state.sizes} outOfStock = {this.state.outOfStock}/>

        <ProductDescription productSlogan = {this.state.productSlogan} productDescription = {this.state.productDescription}/>
        <div id = 'social-container'>
          <i className="fab fa-2x fa-facebook"></i>
          <i className="fab fa-2x fa-twitter"></i>
          <i className="fab fa-2x fa-pinterest"></i>
        </div>

      </div>

    );
  }
}

export default Overview;