import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {

    // if quantity of style/size combo >15, dropdown should allow user to select from 1-15;
    // Else if <15, user selects from 1 to the quantity in stock
    var output = [];
    if (!this.props.quantity) {
      output.push(<option>—</option>);
    } else if (this.props.quantity >= 15) {
      for (var i = 1; i <= 15; i++) {
        output.push(<option>{i}</option>);
      }
    } else {
      for (var i = 1; i <= this.props.quantity; i++) {
        output.push(<option>{i}</option>);
      }
    }

    var ATCMessage = [];

    // check for invalid ATC
    if (!this.props.validATC) {
      ATCMessage.push(<div id = 'atc'>Please Select A Size!</div>);
    }


    return (
      <div>

        <div id = 'atc-container'>

          <div className="select-dropdown">
            <select onChange = {this.props.handleSizeSelect}>

              {this.props.outOfStock ? <option >OUT OF STOCK</option> : <option >Select Size</option>}
              {!this.props.outOfStock ? this.props.sizes.map(size => <option >{size}</option>) : '' }

            </select>
          </div>

          <div className="select-dropdown">
            <select>
              {output}
            </select>
          </div>
        </div>
        <button onClick = {this.props.handleAddToCart} className="ATCButton" >Add To Cart</button>
        <div id = 'atc-text-container'>
          {this.props.validATC === false ? ATCMessage[0]
            :
            /*<div id = 'added-to-cart'> Added To Cart </div>*/
            ''
          }
        </div>

      </div>
    );
  }
}

export default AddToCart;