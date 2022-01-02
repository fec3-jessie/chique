import React, { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
const localHost = 'http://127.0.0.1:3000';

let title;
let subtitle;
let title_body;

const Modal = ({ setShowModal, usage, product_name, questionOrProduct_id }) => {
  const [bodyTextValue, setBodyTextValue] = useState('');
  const [nicknameValue, setNicknameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  // Close the modal when clicking outside the modal
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  if (usage === 'addAnswer') {
    title = 'Submit your answer';
    subtitle = `${product_name}:`;
    title_body = 'Your Answer';
  } else {
    title = 'Ask Your Question';
    subtitle = `About the ${product_name}:`;
    title_body = 'Your Question';
  }

  const postModalInput = (endpoint, body) => {
    axios.post(localHost + endpoint, body)
      .catch(err => console.error('Error posting Modal PUT req: ', err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let endpoint;
    let body = {
      body: document.getElementById('QA-modal-body').value,
      name: document.getElementById('QA-modal-nickname').value,
      email: document.getElementById('QA-modal-email').value
    };

    if (usage === 'addAnswer') {
      endpoint = `/qa/questions/${questionOrProduct_id}/answers`;
      body.photos = [];
      // body = {
      //   body: bodyTextValue,
      //   answerer_name: nicknameValue,
      //   // answerer_email: emailValue,
      //   helpfulness: 0,
      //   photos: []
      // };
    }

    if (usage === 'addQuestion') {
      endpoint = '/qa/questions';
      // body = {
      //   body: bodyTextValue,
      //   name: nicknameValue,
      //   email: emailValue,
      //   product_id: questionOrProduct_id
      // };
      body.product_id = questionOrProduct_id;
    }

    postModalInput(endpoint, body);

    // Closes modal on Submit
    setShowModal(false);
  };

  const onBodyTextChange = (event) => {
    const entry = document.getElementById('QA-modal-body').value;
    setBodyTextValue(entry);
  };

  const onNicknameChange = (event) => {
    const entry = event.target.value;
    setNicknameValue(entry);
  };

  const onEmailChange = (event) => {
    const entry = event.target.value;
    setEmailValue(entry);
  };

  // Render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className='QA-modal-container' ref={modalRef} onClick={closeModal}>
      <div className='QA-modal-content'>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor='QA-modal-body'>{title_body}<span id='required-input'>*</span></label><br/>
          <textarea
            id='QA-modal-body' maxLength='1000' required
            rows='12' cols='50' onChange={onBodyTextChange}
          ></textarea>

          <br/>
          <br/>

          <label htmlFor='QA-modal-nickname'>What is your nickname?<span id='required-input'>*</span></label><br/>
          <input type='text' id='QA-modal-nickname' maxLength='60'
            placeholder='Example: jack543!' size='30' required
            onChange={onNicknameChange}/>
          <p id='QA-modal-disclaimer'>For privacy reasons, do not use your full name or email address</p>

          <br/>

          <label htmlFor='QA-modal-email'>Your email:<span id='required-input'>*</span></label><br/>
          <input type='email' id='QA-modal-email' maxLength='60' required
            placeholder='jack@email.com' size='30'
            onChange={onEmailChange}/>
          <p id='QA-modal-disclaimer'>For authentication reasons, you will not be emailed</p>

          <br/>

          {usage === 'addAnswer' &&
          <>
            <label htmlFor='answer-photos'>Upload your photos (5 Max):</label><br/>
            <input type='file' id='answer-photos' accept='image/*' />
          </>
          }

          <br/>
          <br/>

          <input type='submit' value='Submit answer' id='answer-submit' />
        </form>

        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById('thumbnail-portal')
  );
};

export default Modal;