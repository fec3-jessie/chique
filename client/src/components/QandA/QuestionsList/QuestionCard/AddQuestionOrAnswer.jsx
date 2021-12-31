import React, { useState } from 'react';
import ModalAnswer from './ModalAnswer.jsx';
import ModalQuestion from '../ModalQuestion.jsx';

var displayElement, component;

const AddQuestionOrAnswer = ({ usage }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  if (usage === 'addAnswer') {
    displayElement = <span className='clickable' onClick={openModal}>Add Answer</span>;
    component = <ModalAnswer setShowModal={setShowModal} />;
  } else {
    displayElement = <button onClick={openModal}>Add a Question +</button>;
    component = <ModalQuestion setShowModal={setShowModal} />;
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