import React from 'react';

function ReviewBody ({body, summary, photos}) {

  return (
    <div className='body-tile'>
      <p className='body-summary-tile'>{summary} </p>
      <p>{body}</p>
      {photos.length > 0 ?
      photos.map((photo) => {
        return <div className='review-thumbnail' key={photo.id}>
          <img
          className='img-container'
          src={photo.url}
          key={photo.id}
          alt='product thumbnail'>
          </img>
            </div>
      }) : null}
    </div>
  )
}

export default ReviewBody;