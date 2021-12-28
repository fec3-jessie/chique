import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config.js';
import QuestionCard from './QuestionsList/QuestionCard.jsx';

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
      {questions.map(item =>
        <QuestionCard
          answers={item.answers}
          asker={item.asker_name}
          body={item.question_body}
          date={item.question_date}
          helpful={item.question_helpfulness}
          key={item.question_id}
          reported={item.reported}
        />
      )}
    </>
  );
}

export default QuestionsList;