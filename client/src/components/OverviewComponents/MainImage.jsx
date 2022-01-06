import React from 'react';


class MainImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render () {

    return (
      <>
        {this.props.images ? <img onClick = {this.props.showExpandedView} id = 'main-image' src = {this.props.images[Number(this.props.selectedStyle)][this.props.currentIndex].url} /> : ''}
      </>
    );

  }

}
export default MainImage;