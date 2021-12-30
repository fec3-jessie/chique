import React, {useRef} from 'react';

function NewReviewForm () {

  return (
    <div className='review-form-container'>
      <form className='form' id='form'>
        <h2 className="form__title">Write Your Review</h2>
        <h4 className="form__subtitle">{`About the ${'[Product Name Here]'}`}</h4>
        <div className="form-row-container">
          <label
            id="nickNameLabel"
            htmlFor="review-nickName"
            className="container__label">
            What is your nickname
          </label>
          <input
            className="container__input"
            type='text'
            id="review-nickName"
            name='review-nickName'
            placeholder='Example: jackson11!'
            maxLength='60'/>
        </div>
        <div className="form-row-container">
          <label
            id="summaryLabel"
            htmlFor="review-summary"
            className="container__label">
            Review Summary
          </label>
          <input
            className="container__input"
            type='text'
            id="review-summary"
            name='review-summary'
            placeholder='Example: Best purchase ever!'
            maxLength='60'/>
        </div>
        <div className="form-row-container">
          <label
            id="bodyLabel"
            htmlFor='review-body'
            className="container__label">
            Review Body *
          </label>
          <textarea
            className="container__input"
            id='review-body'
            name='review-body'
            minLength='50'
            maxLength='1000'
            placeholder='Why did you like the product or not?'
            required>
          </textarea>
        </div>
        <button className="form__submit" id="submit review" type="button" value="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewReviewForm;