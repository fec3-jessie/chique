import React from 'react';


class Circles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render () {

    return (
      <div id = 'circles'>
        {this.props.images.map( (image, i) => {
          return <i className = {this.props.currentIndex === i ? 'fas fa-circle clickedCircle' : 'fas fa-circle'} onClick = {this.props.handleCircleClick} key = {i} id = {Number(i)}></i>;
        })}

      </div>
    );

  }

}
export default Circles;