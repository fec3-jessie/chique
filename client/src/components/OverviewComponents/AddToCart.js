import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {


    var output = [];
      if(this.props.quantity >= 15) {

        for (var i = 1; i <= 15; i++) {
          output.push(<option>{i}</option>)
        }
      } else {
          for (var i = 1; i <= this.props.quantity; i++) {
            output.push(<option>{i}</option>)
          }
        }


    var ATCMessage = [];

    if (!this.props.validATC) {
      ATCMessage.push(<span id = 'atc'>Please Select A Size!</span>)
    }


    return (
      <>

  <div className="select-dropdown">
    <select onChange = {this.props.handleSizeSelect}>

    {this.props.outOfStock ? <option >OUT OF STOCK</option> : <option >Select Size</option>}

    {!this.props.outOfStock ? this.props.sizes.map(size =>
    <option >{size}</option>
    ) : '' }

    </select>
  </div>



 <div className="select-dropdown">
    <select>



      {output}
      {/* <option value="Brooklyn">1</option>
      <option value="Manhattan">Manhattan</option>
      <option value="Queens">Queens</option> */}
    </select>
  </div>


<button onClick = {this.props.handleAddToCart} /*handleAddToCart = {this.handleAddToCart.bind(this)} */className="button-13" role="button">Add To Cart</button>

{this.props.validATC === false ? ATCMessage[0] : ''}


      </>
    )
  }
}

export default AddToCart;