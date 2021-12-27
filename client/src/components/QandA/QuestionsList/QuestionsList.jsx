import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../../config.js';

const host = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
const headers = {
  'Authorization': `${config.TOKEN}`
};

const QuestionsList = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(host + `/qa/questions?product_id=${props.product_id}`, { headers })
      .then(returnedQuestions => {
        setQuestions(returnedQuestions.data.results);
      })
      .catch(err => console.error('Get request error (QuestionsList.jsx): ', err))
  }, []);

  return (
    <>
      {questions.map(item => {
        <QuestionCard
          answers={item.answers}
          asker={item.asker_name}
          qBody={item.question_body}
          qDate={item.question_date}
          qHelpful={item.question_helpfulness}
          qID={item.question_id}
          qReported={item.reported}
        />
      })}
    </>
  );
}

export default QuestionsList;