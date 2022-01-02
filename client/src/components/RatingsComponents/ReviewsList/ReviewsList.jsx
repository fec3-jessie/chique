import React from 'react';
import { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import ReviewsListSorting from './ReviewsListSorting.jsx';
import NewReviewModal from './NewReviewModal.jsx';

function ReviewsList ({reviews, factors, productName, characteristics, product_Id, handleChangeSort, starsClicked, data}) {
  const [showModal, setShowModal] = useState(false);
  const openFormModal = () => {
    setShowModal(true);
  };

  return (
    <div className='reviews-list'>
      <ReviewsListSorting reviewsNum={reviews.length}
        handleChangeSort={handleChangeSort}/>
      <div className='reviews-list-tiles'>
        {reviews?.map((review) => {
          return <ReviewTile
            rating={review.rating}
            key={review.review_id}
            user={review.reviewer_name}
            time={review.date}
            body={review.body}
            summary={review.summary}
            recommend={review.recommend}
            response={review.response}
            photos={review.photos}
            helpfulness={review.helpfulness}
            reviewId={review.review_id}/>
        })}
      </div>
      <div className='review-list-buttons-container'>
        <button className='btn reviews'>More Reviews</button>
        <button className='btn reviews'
          onClick={() => openFormModal()}
          >Add Review</button>
          {showModal ? <NewReviewModal
            setShowModal={setShowModal}
            productName={productName}
            characteristics={characteristics}
            factors={factors}
            product_Id={product_Id}/> : null}
      </div>
    </div>
  )
}


export default ReviewsList;