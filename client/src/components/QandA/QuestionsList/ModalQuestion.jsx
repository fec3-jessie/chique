import React, { useRef } from 'react';
import ReactDom from 'react-dom';

const ModalQuestion = ({ setShowModal }) => {
  // Close the modal when clicking outside the modal
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  // Render the modal JSX in the portal div
  return ReactDom.createPortal(
    <div className='container-modal' ref={modalRef} onClick={closeModal}>
      <div className='modal-answer'>
        <h3>Ask Your Question</h3>
        <h4>About the [Product Name Here]:</h4>
        <form>
          <label for='answer-text'>Your Question:</label><br/>
          <textarea
            id='answer-text' maxlength='1000' required
            rows='12' cols='50'
          ></textarea>
          {/* <input type='text' id='answer-text' maxlength='1000' required/> */}

          <br/>
          <br/>

          <label for='answer-nickname'>What is your nickname?</label><br/>
          <input type='text' id='answer-nickname' maxlength='60'
            placeholder='Example: jackson11!' size='30' required />
          <p id='answer-disclaimer'>For privacy reasons, do not use your full name or email address</p>

          <br/>

          <label for='answer-email'>Your email:</label><br/>
          <input type='email' id='answer-email' maxlength='60'
            placeholder='jack@email.com' size='30' required />
          <p id='answer-disclaimer'>For authentication reasons, you will not be emailed</p>

          <br/>
          <br/>

          <input type='submit' value='Submit question' id='answer-submit' />
        </form>

        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById('thumbnail-portal')
  );
};

export default ModalQuestion;