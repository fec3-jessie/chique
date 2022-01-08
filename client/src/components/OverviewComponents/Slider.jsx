import React from 'react';
import LeftArrowSlider from './LeftArrowSlider.jsx';
import RightArrowSlider from './RightArrowSlider.jsx';

class Slider extends React.Component {
  constructor(props) {
    super(props);

  }



  render () {
    return (
      <>
        <div className = 'slider-container'>
          <LeftArrowSlider handleLeftArrowSlider = {this.props.handleLeftArrowSlider}/>

          {this.props.images ? this.props.images[Number(this.props.selectedStyle)].map( (photo, i) => {
            if (i <= this.props.imageRange[1] && i >= this.props.imageRange[0]) {

              return <img key = {i} className = {this.props.currentIndex === i ? 'slider-thumbnail active-thumbnail' : 'slider-thumbnail' } onClick = {this.props.handleSliderThumbnailClick} thumbnailid = {i} className = 'slider-thumbnail' src = {photo.url}/>;
            }
          })
            : '' }
          <RightArrowSlider handleRightArrowSlider = {this.props.handleRightArrowSlider}/>

        </div>
      </>
    );

  }

}
export default Slider;