import React, { useState, useEffect } from 'react';
import QuestionBody from './QuestionBody.jsx';
import Answers from './Answers.jsx';

const QuestionCard = ({ answers, asker, body, date, helpful, ID, reported }) => {

  const onSeeMoreAnswersClick = () => {

  }

  return (
    <div>
      Q: <QuestionBody body={body}/>
      A: <Answers answers={answers}/>
      {Object.keys(answers).length > 2
        ? <button onClick={onSeeMoreAnswersClick}>See more answers</button>
        : <></>
      }
    </div>
  );
}

export default QuestionCard;