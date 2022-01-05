import React from 'react';


class RightArrowExpanded extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <>
        <div className='right-arrow-expanded' onClick={this.props.handleLeftArrowSlider}>
          <i className='fa fa-angle-right fa-3x'></i>
        </div>
      </>
    );

  }

}
export default RightArrowExpanded;