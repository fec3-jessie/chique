import React from 'react';


class LeftArrowExpanded extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <>
        <div className='left-arrow-expanded' >
          <i onClick={this.props.handleLeftArrowExpanded} className='fa fa-angle-left fa-3x'></i>
        </div>
      </>
    );

  }

}
export default LeftArrowExpanded;