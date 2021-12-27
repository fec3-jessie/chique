import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../../config.js';

const host = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
const headers = {
  'Authorization': `${config.TOKEN}`
};

const QuestionsList = () => {
  const [questions, setQuestions] = useState({product_id: '', results: []});

  useEffect(() => {
    axios.get(host + '/qa/questions?product_id=40356', { headers })
      .then(returnedQuestions => {
        console.log(returnedQuestions.data.results);
        setQuestions(returnedQuestions.data);
      })
      .catch(err => console.error('Get request error (QuestionsList.jsx): ', err))
  }, []);

  return (
    <>
      These are the questions for this product:
      {questions.results.length}
    </>
  );
}

export default QuestionsList;