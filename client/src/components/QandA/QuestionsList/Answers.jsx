import React, { useState, useEffect } from 'react';
import AnswerBody from './Answers/AnswerBody.jsx';
import AnswerDetails from './Answers/AnswerDetails.jsx';
import AnswerImages from './Answers/AnswerImages.jsx';

const Answers = ({ answers, answerCounter }) => {
  let answersArray = Object.values(answers);
  let sortedAnswers = [];
  let temp = [];

  answersArray.sort((a, b) => b.helpfulness - a.helpfulness);
  for (let i = 0; i < answersArray.length; i++) {
    if (answersArray[i].answerer_name === 'Seller') {
      sortedAnswers.push(answersArray[i]);
    } else {
      temp.push(answersArray[i]);
    }
  }
  sortedAnswers = sortedAnswers.concat(temp);
  temp = [];

  return (
    <div className='QA-answers-container'>
      {sortedAnswers.slice(0, answerCounter).map(ans =>
        <div key={ans.id * 2}>
          <AnswerBody
            // key={ans.id * 2}
            body={ans.body}
          />
          <AnswerDetails
            name={ans.answerer_name}
            date={ans.date}
            helpfulness={ans.helpfulness}
            // key={ans.id}
            answer_id={ans.id}
          />
          {ans.photos.length !== 0
            ? <AnswerImages
              photos={ans.photos}
              // key={-ans.id}
              answer_id={ans.id}
            />
            : null
          }
          <br/>
        </div>
      )}
    </div>
  );
};

export default Answers;