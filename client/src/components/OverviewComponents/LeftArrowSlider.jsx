import React from 'react';


class LeftArrowSlider extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <>
        <div className='left-arrow-slider' onClick={this.props.handleLeftArrowSlider}>
          <i className='fa fa-angle-left fa-3x'></i>
        </div>
      </>
    );

  }

}
export default LeftArrowSlider;