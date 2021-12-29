import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {

    return (
      <>
        {this.props.numberOfReviews ? <div id = "reviews-overview">Read all {this.props.numberOfReviews} reviews</div> : '' }
      </>
    )
  }
}

export default Reviews;