import React, { useState, useEffect } from 'react';
import QuestionBody from './QuestionCard/QuestionBody.jsx';
import Answers from './Answers.jsx';
import QuestionDetails from './QuestionCard/QuestionDetails.jsx';

const QuestionCard = ({ answers, asker, body, date, helpful, reported, ID }) => {

  const onSeeMoreAnswersClick = () => {

  }

  return (
    <div id='Question-Card'>
      <QuestionDetails
        asker={asker}
        date={date}
        helpful={helpful}
        reported={reported}
      />
      <div className='symbol question-symbol'>Q:</div>
      <QuestionBody body={body}/>
      <div className='symbol answer-symbol'>A:</div>
      <Answers answers={answers}/>
      {Object.keys(answers).length > 2
        ? <button onClick={onSeeMoreAnswersClick}>See more answers</button>
        : <></>
      }
    </div>
  );
}

export default QuestionCard;