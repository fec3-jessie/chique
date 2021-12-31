import React, { useState } from 'react';
import AddQuestionOrAnswer from './AddQuestionOrAnswer.jsx';

const options = { month: 'long', day: 'numeric', year: 'numeric' };

const QuestionDetails = ({ asker, date, helpful, reported }) => {
  const newDate = new Date(date).toLocaleDateString('default', options);

  return (
    <section>
      Helpful? <span className='clickable'>Yes</span> ({helpful}) &nbsp;
      | &nbsp;
      <AddQuestionOrAnswer usage={'addAnswer'}/>
    </section>
  );
}

export default QuestionDetails;