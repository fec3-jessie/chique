import React from 'react';
import HelpfulTracker from '../HelpfulTracker.jsx';

const options = { month: 'long', day: 'numeric', year: 'numeric' };

const AnswerDetails = ({ name, date, helpfulness, answer_id }) => {
  const newDate = new Date(date).toLocaleDateString('default', options);

  return (
    <section>
      by {name}, {newDate} &nbsp;
      |&nbsp;&nbsp;
      <HelpfulTracker questionOrAnswer_id={answer_id} helpful={helpfulness} usage='answer'/>
    </section>
  );
};

export default AnswerDetails;
