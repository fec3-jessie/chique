import React from 'react';
import { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
import ReviewsListSorting from './ReviewsListSorting.jsx';
import NewReviewModal from './NewReviewModal.jsx';

function ReviewsList ({reviews, factors, productName, characteristics, product_Id, starsClicked, data, reviewsCount, setReviewsCount, setSort, sort}) {
  const [showModal, setShowModal] = useState(false);
  const [reviewsShown, setReviewsShown] = useState(2);
  const [reviewsList, setReviewsList] = useState([]);
  const openFormModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    setReviewsCount(reviews.length);
    let list = reviews.slice(0, reviewsShown);
    setReviewsList(list);
  }, [reviews]);

  useEffect(() => {
    let list = reviews.slice(0, reviewsShown);
    setReviewsList(list);
  }, [reviewsShown, sort, starsClicked]);

  return (
    <div className='reviews-list'>
      <ReviewsListSorting
        reviewsNum={reviewsCount}
        setSort={setSort}/>
      <div className='reviews-list-tiles'>
        {reviewsList?.map((review) => {
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
            reviewId={review.review_id}
            setReviewsCount={setReviewsCount}/>;
        })}
      </div>
      <div className='review-list-buttons-container'>
        <button className='btn reviews'
          onClick={(e) => {
            e.preventDefault();
            setReviewsShown(prevState => prevState + 2);
          }}
        >More Reviews
        </button>
        <button className='btn reviews'
          onClick={() => openFormModal()}
        >Add Review
        </button>
        {showModal ?
          <NewReviewModal
            setShowModal={setShowModal}
            productName={productName}
            characteristics={characteristics}
            factors={factors}
            reviewsCount={reviewsCount}
            product_Id={product_Id}
            reviewsCount={reviewsCount}
            setReviewsCount={setReviewsCount}
          /> : null}
      </div>
    </div>
  );
}


export default ReviewsList;