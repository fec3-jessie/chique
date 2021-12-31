import React, {useState, useEffect} from 'react';
import {token} from '../../../../../config.js';
import Axios from 'axios';

function NewReviewForm ({factors}) {
  const factorGrades = {
    'Size': ['A size too small', 'Perfect', 'A size too big'],
    'Width': ['Too narrow', 'Perfect', 'Too Wide'],
    'Comfort': ['Uncomfortable', 'Ok', 'Perfect'],
    'Quality': ['Poor', 'What I expected', 'Perfect'],
    'Length': ['Runs short', 'Perfect', 'Runs long'],
    'Fit': ['Runs tight', 'Perfect', 'Runs long']
  };

  console.log(factors);
  // const createFactors = () => {

  // }


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
          <div className='recommend-options-container'>
            <input
              type='radio'
              id='review-yes'
              name='review-recommend'
              value='yes'
              defaultChecked>
            </input>
            <label
              id='yesLabel'
              htmlFor='review-yes'
              className='container__label'>
              Yes
            </label>
            <input
              type='radio'
              id='review-no'
              name='review-recommend'
              value='no'>
            </input>
            <label
              id='noLabel'
              htmlFor='review-no'
              className='container__label'>
              No
            </label>
          </div>
        </div>
        <div className='form-row-container'>
          <p className='container__label'>Characteristics</p>
          {/* {factors.map((factor, i) => {
            return <h6 key={i}>{factor}</h6>;
          })} */}
        </div>
        <div id='form-buttons-container'>
          <button className="form__photo" id="submit-photo" type="button" value="submit-photo">Upload Your Photos</button>
          <button className="form__submit" id="submit-review" type="button" value="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewReviewForm;