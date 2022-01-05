import React, { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
const localHost = 'http://127.0.0.1:3000';
import { cloudinary_name, cloudinary_url } from '/config';

let title;
let subtitle;
let title_body;
let buttonText;

const Modal = ({ setShowModal, usage, product_name, questionOrProduct_id, onAorQAddition }) => {
  const [bodyTextValue, setBodyTextValue] = useState('');
  const [nicknameValue, setNicknameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  // const [fileInput, setFileInput] = useState('');
  const [selectFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState();

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
    buttonText = 'Submit Answer';
  } else {
    title = 'Ask Your Question';
    subtitle = `About the ${product_name}:`;
    title_body = 'Your Question';
    buttonText = 'Submit Question';
  }

  const postModalInput = (endpoint, body) => {
    axios.post(localHost + endpoint, body)
      .then(() => onAorQAddition() )
      .catch(err => console.error( 'Error posting from Modal: ', err) );
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setImage(file);
  };

  // const uploadImage = (base64EncodedImage) => {
  //   axios.post(
  //     `${localHost}/api/upload`,
  //     { data: JSON.stringify(base64EncodedImage) },
  //     { headers: { 'Content-Type': 'application/json' }}
  //   )
  //     .catch(err => console.error( 'Error posting Modal images: ', err ));
  // };
  const uploadImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'fec_preset');
    data.append('cloud_name', cloudinary_name);

    axios.post(cloudinary_url, data)
      .then(response => response.json())
      .then(result => setUrl(result.url))
      .catch(err => console.error('Error posting to Cloudinary: ', err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Uploads an image to Cloudinary
    // uploadImage();

    let endpoint;
    let body = {
      body: document.getElementById('QA-modal-body').value,
      // body: event.target.modalBody.value,
      name: document.getElementById('QA-modal-nickname').value,
      // name: event.target.modalName.value,
      email: document.getElementById('QA-modal-email').value
      // email: event.target.modalEmail.value
    };

    if (usage === 'addAnswer') {
      endpoint = `/qa/questions/${questionOrProduct_id}/answers`;
      body.photos = [];
    }

    if (usage === 'addQuestion') {
      endpoint = '/qa/questions';
      body.product_id = questionOrProduct_id;
    }

    postModalInput(endpoint, body);

    /* ----- Handle Images on Submit ----- */
    // if (previewSource) {
    //   uploadImage(previewSource);
    // }

    // Closes modal on Submit
    setShowModal(false);
  };

  // Render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className='QA-modal-container' ref={modalRef} onClick={closeModal}>
      <div className='QA-modal-content'>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor='QA-modal-body'>{title_body}<span className='QA-modal-required-input'> *</span></label><br/>
          <textarea
            id='QA-modal-body' maxLength='1000' required
            rows='12' cols='50' name='modalBody'
          ></textarea>

          <br/>
          <br/>

          <label htmlFor='QA-modal-nickname'>What is your nickname?<span className='QA-modal-required-input'> *</span></label><br/>
          <input type='text' id='QA-modal-nickname' maxLength='60'
            placeholder='Example: jack543!' size='30' required name='modalNickname'
          />
          <p id='QA-modal-disclaimer'>For privacy reasons, do not use your full name or email address</p>

          <br/>

          <label htmlFor='QA-modal-email'>Your email:<span className='QA-modal-required-input'> *</span></label><br/>
          <input
            type='email' id='QA-modal-email' maxLength='60' required
            placeholder='jack@email.com' size='30' name='modalEmail'
          />
          <p id='QA-modal-disclaimer'>For authentication reasons, you will not be emailed</p>

          <br/>

          {usage === 'addAnswer' &&
          <>
            <label htmlFor='answer-photos'>Upload your photos (5 Max):</label><br/>
            <input
              type='file' id='answer-photos' onChange={handleFileInputChange}
            />
            {
              previewSource &&
              <img
                src={previewSource}
                alt='Image to upload'
                style={{ height: '5vh' }}
              />
            }
          </>
          }

          <br/>
          <br/>

          <input type='submit' value={buttonText} className='QA-modal-submit-btn' />
        </form>

        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById('thumbnail-portal')
  );
};

export default Modal;