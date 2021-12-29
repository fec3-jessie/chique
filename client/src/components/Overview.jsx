import React from 'react';
import StarRating from './OverviewComponents/StarRating.js';
import Reviews from './OverviewComponents/Reviews.js';
import axios from 'axios'
import token from '../../../config.js'
import StyleSelector from './OverviewComponents/StyleSelector.js'
// import ImageGallery from '/Users/danielghaly/Desktop/Hack Reactor/fec3/client/src/components/OverviewComponents/ImageGallery.js'
import AddToCart from './OverviewComponents/AddToCart.js'


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
      validATC: null

    }
  }

  componentDidMount() {




    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344', {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      this.setState({numberOfReviews: res.data.results.length})

      var sum = 0;
      res.data.results.forEach(item => {
        sum += item.rating
      })
      var rating = sum/(res.data.results.length)
      this.setState({rating: rating})
    })

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344', {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      this.setState({productName: res.data.name})
      this.setState({productCategory: res.data.category})
      this.setState({productCategory: res.data.category})
      this.setState({productPrice: res.data.default_price})

    })



    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', {
      headers: {
        authorization: token
      }
    })
    .then(res => {


      // initialize size
      var style = res.data.results[0]
      var styleSkus = style.skus;
      var sizesArr = [];
      for (var sku in styleSkus) {
        if (!sizesArr.includes(styleSkus[sku].size)) {
          sizesArr.push(styleSkus[sku].size)
        }
      }
      console.log(sizesArr)
      this.setState({sizes: sizesArr})


      // initialize quantity
      var style = res.data.results[0]
      var styleSkus = style.skus
      console.log('styleSkus', styleSkus)
      var quantity = 0;
      for (var sku in styleSkus) {
        console.log('state',this.state.selectedSize)
        console.log(styleSkus[sku].size)
        if (styleSkus[sku].size === this.state.selectedSize) {
          // console.log('a',styleSkus[sku].quantity)
          // console.log(styleSkus[sku].quantity)
          quantity += styleSkus[sku].quantity
          // console.log(quantity)
        }
      }
      this.setState({quantity:quantity})

      var styles = [];
      res.data.results.forEach(style => {
        styles.push(style['style_id'])
      })
      this.setState({styles:styles})
    })


    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      var urls = [];
      console.log(res.data.results[0])

      res.data.results.forEach( (style, i) => {
        urls.push(   {url: style.photos[0]['thumbnail_url'], index: i})
      })
      this.setState({thumbnails: urls})
    })



    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      this.setState({results: res.data.results})
      // var sizesArr = [];
      // // if (this.state.res)
      // // var style = res.data.results[this.state.]
      // res.data.results.forEach(style => {
      //   var styleSkus = style.skus
      //   for (var sku in styleSkus) {
      //     if (!sizesArr.includes(styleSkus[sku].size)) {
      //       sizesArr.push(styleSkus[sku].size)
      //     }
      //   }

      // })
      // console.log(sizesArr)
      // this.setState({sizes: sizesArr})

    })


    var quantity = 0;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles`, {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      res.data.results.forEach(style => {
        if (style.style_id === this.state.selectedStyle) {
          var styleSkus = style.skus
          console.log(styleSkus)
          for (var sku in styleSkus) {
            if (styleSkus[sku].size === this.state.selectedSize) {
              // console.log('a',styleSkus[sku].quantity)
              // console.log(styleSkus[sku].quantity)
              quantity += styleSkus[sku].quantity
              // console.log(quantity)
            }
          }
        }

      })


      // this.setState({quantity: quantity})


    })

  }


  handleStyleClick(e) {
    this.setState({selectedStyle : event.target.getAttribute("id")}, () => {
    var style = this.state.results[Number(this.state.selectedStyle)];
    var styleSkus = style.skus;
    var sizesArr = [];
    for (var sku in styleSkus) {
      if (!sizesArr.includes(styleSkus[sku].size)) {
        sizesArr.push(styleSkus[sku].size)
      }
    }
    console.log(sizesArr)
    this.setState({sizes: sizesArr})

    var quantity = 0;
      for (var sku in styleSkus) {


        console.log('state',this.state.selectedSize)
        console.log('bbbbbbbbb', sku)
        quantity += styleSkus[sku].quantity
      }

      console.log('aaaaaa', quantity)

      if (quantity === 0) {
        this.setState({outOfStock : true})
      } else {
        this.setState({outOfStock : null})

      }


    })



  }


  handleSizeSelect(e) {
    console.log(e.target.value)
    if (e.target.value === 'Select Size') {
      this.setState({selectedSize: null})
      return;
    }
    this.setState({selectedSize: e.target.value}, () => {
      var style = this.state.results[this.state.selectedStyle]
      var styleSkus = style.skus
      console.log('styleSkus', styleSkus)
      var quantity = 0;
      for (var sku in styleSkus) {
        console.log('state',this.state.selectedSize)
        console.log(styleSkus[sku].size)
        if (styleSkus[sku].size === this.state.selectedSize) {
          // console.log('a',styleSkus[sku].quantity)
          // console.log(styleSkus[sku].quantity)
          quantity += styleSkus[sku].quantity
          // console.log(quantity)
        }
      }
      this.setState({quantity:quantity})
      })



    }


    handleAddToCart() {
      if (this.state.selectedSize === null || this.state.selectedStyle === null) {
        this.setState({validATC: false})
      } else {
        this.setState({validATC: true})
      }
    }




  render () {


    return (
      <>
        <StarRating rating ={this.state.rating}/>
        <Reviews numberOfReviews = {this.state.numberOfReviews} />
        <div id = 'category-overview'>{this.state.productCategory}</div>
        <div id = 'product-name-overview'>{this.state.productName}</div>
        <div id = 'price-overview'>${this.state.productPrice}</div>
        <StyleSelector results = {this.state.results}  selectedStyle = {this.state.selectedStyle} handleStyleClick = {this.handleStyleClick.bind(this)} thumbnails = {this.state.thumbnails} />
        {/* <ImageGallery/> */}
        <AddToCart validATC = {this.state.validATC} handleAddToCart = {this.handleAddToCart.bind(this)} handleSizeSelect = {this.handleSizeSelect.bind(this)} quantity = {this.state.quantity} sizes = {this.state.sizes} outOfStock = {this.state.outOfStock}/>
      </>
    )
  }
}

export default Overview;