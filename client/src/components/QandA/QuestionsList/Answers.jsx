import React, { useState, useEffect } from 'react';
import AnswerBody from './Answers/AnswerBody.jsx';
import AnswerDetails from './Answers/AnswerDetails.jsx';
import AnswerImages from './Answers/AnswerImages.jsx';

const Answers = ({ answers }) => {
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
  console.log('Sorted answers: ', sortedAnswers);

  return (
    <>
      {sortedAnswers.map(ans =>
        <div>
          <AnswerBody
            body={ans.body}
          />
          <AnswerDetails
            name={ans.answerer_name}
            date={ans.date}
            helpfulness={ans.helpfulness}
            ID={ans.id}
          />
          {ans.photos.length !== 0
            ? <AnswerImages photos={ans.photos} />
            : <></>
          }
        </div>
      )}
    </>
  );
}

export default Answers;