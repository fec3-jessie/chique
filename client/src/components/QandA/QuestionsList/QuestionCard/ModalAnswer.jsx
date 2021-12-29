import React, { useRef } from 'react';
import ReactDom from 'react-dom';

const ModalAnswer = ({ setShowModal }) => {
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
        <form>

        </form>
        <h2>This is a Modal</h2>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById('thumbnail-portal')
  );
};

export default ModalAnswer;