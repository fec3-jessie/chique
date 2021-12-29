import React from 'react';

function PercentRecommended ({recommended}) {
  const calculateRecommended = (data) => {
    let total = parseInt(data.false) + parseInt(data.true);
    let yesPercent = Math.round((parseInt(data.true) / total) * 100);
    return yesPercent;
  }

  return (
    <div className='percent-recommendation'>{`${calculateRecommended(recommended)}% of reviews recommend this product`}</div>
  )
}

export default PercentRecommended;