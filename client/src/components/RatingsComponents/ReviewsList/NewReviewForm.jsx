import React, {useState, useEffect} from 'react';
import Axios from 'axios';
const { localhost } = require('/config.js');

function NewReviewForm ({factors, productName, closeModalOnSubmit, characteristics, product_Id, reviewsCount, setReviewsCount}) {
  const factorGrades = {
    'Size': ['A size too small', '1/2 size too small', 'Perfect', '1/2 size too big', 'A size too wide'],
    'Width': ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too Wide'],
    'Comfort': ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    'Quality': ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    'Length': ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    'Fit': ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  };

  const [starFill, setStarFill] = useState(false);
  const [starFill2, setStarFill2] = useState(false);
  const [starFill3, setStarFill3] = useState(false);
  const [starFill4, setStarFill4] = useState(false);
  const [starFill5, setStarFill5] = useState(false);

  const [charCount, setCharCount] = useState(0);
  const [starsCount, setStarsCount] = useState(1);
  const [recommend, setRecommend] = useState(true);
  const [photosList, setPhotosList] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [imageSelected, setImageSelected] = useState('');



  const addPhotosInputBox = () => {
    if (photosList.length < 5) {
      setPhotosList(prevState => [true, ...prevState]);
    }
  };

  const upLoadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'kbc6kwjc');
    Axios.post('https://api.cloudinary.com/v1_1/dg6a907c2/image/upload', formData)
      .then((res) => {
        setPhotos(prevState => [res.data.secure_url, ...prevState]);
        e.target.innerText = 'Loaded';
        e.target.style.backgroundColor = 'green';
      })
      .catch((err) => console.log('cloudinary posting error::', err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let characters = {};
    factors.forEach((factor) => {
      if (Number(e.target[factor].value) === 0) {
        characters[characteristics[factor].id] = 1;
      } else {
        characters[characteristics[factor].id] = Number(e.target[factor].value);
      }
    });

    let summary;
    if (e.target.reviewSummary.value.length === 0) {
      summary = `${e.target.reviewBody.value.slice(0, 39)}...`;
    } else {
      summary = e.target.reviewSummary.value;
    }

    let body = {
      product_id: parseInt(product_Id),
      rating: starsCount,
      summary: summary,
      body: e.target.reviewBody.value,
      recommend: recommend,
      name: e.target.reviewNickName.value,
      email: e.target.reviewEmail.value,
      photos: photos,
      characteristics: characters
    };

    Axios.post(`${localhost}/reviews`, body)
      .then((response) => {
        setReviewsCount(prevState => prevState + 1);
      })
      .catch((err) => console.log('oops, couldnt post form', err));
  };

  return (
    <div className='review-form-container'>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          closeModalOnSubmit(false);
        }}
        className='form'
        id='form'>
        <h2 className="form__title">Write Your Review</h2>
        <h4 className="form__subtitle">{`About the ${productName}`}</h4>
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
            name='reviewNickName'
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
            name='reviewEmail'
            placeholder='Example: jackson11@email.com'
            maxLength='60'
            required/>
          <div className='privacy-statement'>For authentication reasons, you will not be emailed</div>
        </div>
        <div className='form-row-container'>
          <p className='container__label'>Overall rating *</p>
          <div id='buttons-container-stars-vote' className='buttons-container-stars-vote'>
            <div onClick={() => {
              if (starFill === true && starFill2 === true) {
                setStarFill2(false);
                setStarFill3(false);
                setStarFill4(false);
                setStarFill5(false);
                setStarsCount(1);
              } else {
                setStarFill(true);
                setStarsCount(1);
              }
            }} className='star-div' id='1'>{starFill === true ? '★' : '☆'}</div>
            <div onClick={() => {
              if (starFill2 === true) {
                setStarFill3(false);
                setStarFill4(false);
                setStarFill5(false);
                setStarsCount(2);
              } else {
                setStarFill(true);
                setStarFill2(true);
                setStarsCount(2);
              }
            }} className='star-div'
            id='2'>{starFill2 === true ? '★' : '☆'}
            </div>
            <div onClick={() => {
              if (starFill3 === true) {
                setStarFill4(false);
                setStarFill5(false);
                setStarsCount(3);
              } else {
                setStarFill(true);
                setStarFill2(true);
                setStarFill3(true);
                setStarFill4(false);
                setStarFill5(false);
                setStarsCount(3);
              }
            }} className='star-div' id='3'>{starFill3 === true ? '★' : '☆'}</div>
            <div onClick={() => {
              if (starFill4 === true && starFill5 === true) {
                setStarFill5(false);
                setStarsCount(4);
              } else {
                setStarFill(true);
                setStarFill2(true);
                setStarFill3(true);
                setStarFill4(true);
                setStarsCount(4);
              }
            }} className='star-div' id='4'>{starFill4 === true ? '★' : '☆'}</div>
            <div onClick={() => {
              if (starFill5 === false) {
                setStarFill(true);
                setStarFill2(true);
                setStarFill3(true);
                setStarFill4(true);
                setStarFill5(true);
                setStarsCount(5);
              }
            }} className='star-div' id='5'>{starFill5 === true ? '★' : '☆'}</div>
          </div>
        </div>
        <div className='form-row-container'>
          <p className='container__label'>Do you recommend this product? *</p>
          <div className='recommend-options-container'>
            <input
              type='radio'
              id='review-yes'
              name='review-recommend'
              value='yes'
              defaultChecked
              onClick={() => setRecommend(true)}>
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
              value='no'
              onClick={() => setRecommend(false)}>
            </input>
            <label
              id='noLabel'
              htmlFor='review-no'
              className='container__label'>
              No
            </label>
          </div>
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
            name='reviewSummary'
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
            name='reviewBody'
            minLength='50'
            maxLength='1000'
            placeholder='Why did you like the product or not?'
            required
            onChange={(e) => setCharCount(e.target.value.length)}>
          </textarea>
          <p id='char-count'>{`( ${charCount} )`}</p>
        </div>
        <div className='form-row-container'>
          <p id='characteristics'className='container__label'>Characteristics</p>
          {factors.map((factor, i) => {
            let grades = factorGrades[factor];
            return (
              <div key={i} className='factor-container'>
                <p className='factor-title'>{factor}</p>
                <div className='factor-radio-container'>
                  {grades.map((grade, i) => {
                    return (
                      <div key={i}>
                        <input
                          type='radio'
                          id={grade}
                          name={factor}
                          value={i + 1}>
                        </input>
                        <label
                          htmlFor={grade}
                          className='factor__label'>
                          {grade}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div id='form-photo-input-container'>
          {photosList.length > 0 ?
            photosList.map((bool, i) => (
              <div key={i}
                className='upload-container'>
                <input type='file'
                  className='photo-upload'
                  id={`photo${i}`}
                  name={`photo${i}`}
                  accept='image/png, image/jpeg'
                  onChange={(e) => {
                    setImageSelected(e.target.files[0]);
                  }}>
                </input>
                <button className='upload' id={`upload-button-${i}`}
                  onClick={upLoadImage}>Upload Image</button>
              </div>
            )) : null}
        </div>
        <div id='form-buttons-container'>
          {photosList.length < 5 ?
            <button className="form__photo"
              onClick={() => addPhotosInputBox()}
              id="submit-photo"
              type="button"
              value="submit-photo">
          Upload Your Photos
            </button> : null}
          <button className="form__submit"
            id="submit-review"
            type='submit'
            value="submit"
            data-stars={starsCount}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewReviewForm;
