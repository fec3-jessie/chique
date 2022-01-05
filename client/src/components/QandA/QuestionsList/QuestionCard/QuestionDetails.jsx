import React, { useState } from 'react';
import AddQuestionOrAnswer from './AddQuestionOrAnswer.jsx';
import HelpfulTracker from '../HelpfulTracker.jsx';

const options = { month: 'long', day: 'numeric', year: 'numeric' };

const QuestionDetails = ({ asker, date, helpful, reported, question_id, product_name }) => {
  const newDate = new Date(date).toLocaleDateString('default', options);

  return (
    <section className='QA-question-details'>
      <HelpfulTracker questionOrAnswer_id={question_id} helpful={helpful}
        usage='question' reported={reported}/>
      <AddQuestionOrAnswer
        questionOrProduct_id={question_id}
        product_name={product_name}
        usage={'addAnswer'}
      />
    </section>
  );
};

export default QuestionDetails;