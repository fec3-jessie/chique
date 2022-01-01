import React, { useRef } from 'react';
import ReactDom from 'react-dom';

let title, subtitle, title_body;

const Modal = ({ setShowModal, usage, product_name }) => {
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
    console.log('Title: ', title, '; Sub: ', subtitle, '; Aim: ', title_body);
  } else {
    title = 'Ask Your Question';
    subtitle = `About the ${product_name}:`;
    title_body = 'Your Question';
  }

  // Render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className='container-modal' ref={modalRef} onClick={closeModal}>
      <div className='modal-answer'>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <form>
          <label htmlFor='answer-text'>{title_body}</label><br/>
          <textarea
            id='answer-text' maxLength='1000' required
            rows='12' cols='50'
          ></textarea>
          {/* <input type='text' id='answer-text' maxlength='1000' required/> */}

          <br/>
          <br/>

          <label htmlFor='answer-nickname'>What is your nickname?</label><br/>
          <input type='text' id='answer-nickname' maxLength='60'
            placeholder='Example: jack543!' size='30' required />
          <p id='answer-disclaimer'>For privacy reasons, do not use your full name or email address</p>

          <br/>

          <label htmlFor='answer-email'>Your email:</label><br/>
          <input type='email' id='answer-email' maxLength='60'
            placeholder='jack@email.com' size='30' required />
          <p id='answer-disclaimer'>For authentication reasons, you will not be emailed</p>

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