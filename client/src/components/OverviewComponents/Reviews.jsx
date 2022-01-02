import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {

    return (
      <div>
        {this.props.numberOfReviews ? <div id = "reviews-overview">Read all {this.props.numberOfReviews} reviews</div> : '' }
      </div>
    );
  }
}

export default Reviews;