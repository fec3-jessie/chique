import React, { useState } from 'react';
import Modal from './Modal.jsx';

var displayElement, component;

const AddQuestionOrAnswer = ({ usage }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  if (usage === 'addAnswer') {
    displayElement = <span className='clickable' onClick={openModal}><u>Add Answer</u></span>;
    component = <Modal setShowModal={setShowModal} usage={usage} product_name='TBD (PLACEHOLDER)' />;
  } else {
    displayElement = <button onClick={openModal}>Add a Question +</button>;
    component = <Modal setShowModal={setShowModal} usage={usage} product_name='TBD (PLACEHOLDER)' />;
  }

  return (
    <div className='AddAnswer'>
      {displayElement}
      {showModal
        ? component
        : null
      }
    </div>
  );
}

export default AddQuestionOrAnswer;