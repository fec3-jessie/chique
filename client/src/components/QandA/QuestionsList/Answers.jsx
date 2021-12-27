import React, { useState, useEffect } from 'react';

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

  return (
    <></>
  );
}

export default Answers;