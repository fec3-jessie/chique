import React from 'react';
import LeftArrowSlider from './LeftArrowSlider.jsx';
import RightArrowSlider from './RightArrowSlider.jsx';

class Slider extends React.Component {
  constructor(props) {
    super(props);

  }



  render () {
    console.log( 'current index', this.props.currentIndex)
    return (
      <>
        <div className = 'slider-container'>
          <LeftArrowSlider handleLeftArrowSlider = {this.props.handleLeftArrowSlider}/>

          {this.props.images ? this.props.images[Number(this.props.selectedStyle)].map( (photo, i) => {
            console.log('current i', this.props.currentIndex)
            console.log(this.props.currentIndex === i)
            return <img className = {this.props.currentIndex === i ? 'sliderThumbnailSelected' : '' } onClick = {this.props.handleSliderThumbnailClick} thumbnailId = {i} className = 'slider-thumbnail' src = {photo.url}/>;
          })
            : '' }
          <RightArrowSlider handleRightArrowSlider = {this.props.handleRightArrowSlider}/>

        </div>
      </>
    );

  }

}
export default Slider;