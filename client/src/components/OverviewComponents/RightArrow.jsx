import React from 'react';


class RightArrow extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <>
        <div className='right-arrow' onClick={this.props.handleRightArrow}>
          <i className='fa fa-angle-right fa-3x'></i>
        </div>
      </>
    );

  }

}
export default RightArrow;