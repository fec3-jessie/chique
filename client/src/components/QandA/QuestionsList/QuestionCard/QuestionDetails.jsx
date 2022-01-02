import React, { useState } from 'react';
import AddQuestionOrAnswer from './AddQuestionOrAnswer.jsx';
import HelpfulTracker from '../HelpfulTracker.jsx';

const options = { month: 'long', day: 'numeric', year: 'numeric' };

const QuestionDetails = ({ asker, date, helpful, reported, question_id }) => {
  const newDate = new Date(date).toLocaleDateString('default', options);

  return (
    <section>
      <HelpfulTracker question_id={question_id} helpful={helpful}
      usage='question' reported={reported}/>
      <AddQuestionOrAnswer
        questionOrProduct_id={question_id}
        usage={'addAnswer'}
      />
    </section>
  );
}

export default QuestionDetails;