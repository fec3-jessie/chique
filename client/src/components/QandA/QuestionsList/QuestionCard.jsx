import React, { useState, useEffect } from 'react';
import QuestionBody from './QuestionBody.jsx';
import Answers from './Answers.jsx';

const QuestionCard = ({ answers, asker, body, date, helpful, reported }) => {

  const onSeeMoreAnswersClick = () => {

  }

  return (
    <div>
      <QuestionBody body={body}/>
      <Answers answers={answers}/>
      {Object.keys(answers).length > 2
        ? <button onClick={onSeeMoreAnswersClick}>See more answers</button>
        : <></>
      }
    </div>
  );
}

export default QuestionCard;