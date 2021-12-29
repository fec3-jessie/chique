import React, { useState } from 'react';
import ModalAnswer from './ModalAnswer.jsx';

const AddAnswer = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className='AddAnswer'>
      <span className='clickable' onClick={openModal}>Add Answer</span>
      {showModal
        ? <ModalAnswer setShowModal={setShowModal} />
        : null
      }
    </div>
  );
}

export default AddAnswer;