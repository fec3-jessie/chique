import React from 'react';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import MainImage from './MainImage.jsx';
import Slider from './Slider.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
  }

  handleLeftArrow() {

    var length = this.props.images[Number(this.props.selectedStyle)].length;
    if (this.state.currentIndex === 0) {
      this.setState({currentIndex: length - 1});
    } else {
      this.setState({currentIndex: this.state.currentIndex - 1});
    }
  }

  handleRightArrow() {

    var length = this.props.images[Number(this.props.selectedStyle)].length;
    if (this.state.currentIndex === length - 1) {
      this.setState({currentIndex: 0});
    } else {
      this.setState({currentIndex: this.state.currentIndex + 1});
    }
  }




  render () {
    return (
      <>
        <div className = 'main-image-container'>
          <LeftArrow handleLeftArrow = {this.handleLeftArrow.bind(this)}/>
          <MainImage currentIndex = {this.state.currentIndex} selectedStyle = {this.props.selectedStyle} images = {this.props.images}/>
          <RightArrow handleRightArrow = {this.handleRightArrow.bind(this)}/>
        </div>
        <Slider/>
      </>
    );

  }

}
export default ImageGallery;


