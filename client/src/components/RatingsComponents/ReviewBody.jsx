import React from 'react';

function ReviewBody ({body, summary}) {

  return (
    <div className='body-tile'>
      <p className='body-summary-tile'>{summary} </p>
      <p>{body}</p>
    </div>
  )
}

export default ReviewBody;