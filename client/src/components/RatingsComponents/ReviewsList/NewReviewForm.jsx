import React, {useRef} from 'react';

function NewReviewForm () {

  return (
    <div className='review-form-container'>
      <form className='form' id='form'>
        <h2 className="form__title">Write Your Review</h2>
        <h4 className="form__subtitle">{`About the ${'[Product Name Here]'}`}</h4>
        <div className="form-row-container-nickName">
          <label
            id="nickNameLabel"
            htmlFor="review-nickName"
            className="container__label">
            What is your nickname *
          </label>
          <input
            className="container__input"
            type='text'
            id="review-nickName"
            name='review-nickName'
            placeholder='Example: jackson11!'
            maxLength='60'
            required/>
          <div className='privacy-statement'>For privacy reasons, do not use your full name or email address</div>
        </div>
        <div className="form-row-container-nickName">
          <label
            id="emailLabel"
            htmlFor="review-email"
            className="container__label">
            Your email *
          </label>
          <input
            className="container__input"
            type='email'
            id="review-email"
            name='review-email'
            placeholder='Example: jackson11@email.com'
            maxLength='60'
            required/>
          <div className='privacy-statement'>For authentication reasons, you will not be emailed</div>
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
        <div className='form-row-container'>
          <p className='container__label'>Do you recommend this product? *</p>
          <input
            type='radio'
            id='review-yes'
            name='review-yes'>
          </input>
          <label
            id='yesLabel'
            htmlFor='review-yes'
            className='container__label'>
            Yes
          </label>
        </div>
        <button className="form__submit" id="submit review" type="button" value="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewReviewForm;