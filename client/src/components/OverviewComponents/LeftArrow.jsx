import React from 'react';


class LeftArrow extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <>
        <div className='left-arrow' onClick={this.props.handleLeftArrow}>
          <i className='fa fa-angle-left fa-3x'></i>
        </div>
      </>
    );

  }

}
export default LeftArrow;