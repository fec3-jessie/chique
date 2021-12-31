import React, { useState } from 'react';
import AddQuestionOrAnswer from './AddQuestionOrAnswer.jsx';
import HelpfulTracker from '../HelpfulTracker.jsx';

const options = { month: 'long', day: 'numeric', year: 'numeric' };

const QuestionDetails = ({ asker, date, helpful, reported, ID }) => {
  const newDate = new Date(date).toLocaleDateString('default', options);

  return (
    <section>
      <HelpfulTracker ID={ID} helpful={helpful}
      usage='question' reported={reported}/>
      <AddQuestionOrAnswer usage={'addAnswer'}/>
    </section>
  );
}

export default QuestionDetails;