import React from 'react';


class RightArrowSlider extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <>
        <div className='right-arrow-slider' onClick={this.props.handleRightArrowSlider}>
          <i className='fa fa-angle-right fa-3x'></i>
        </div>
      </>
    );

  }

}
export default RightArrowSlider;