import React, { useState } from 'react';

const options = { month: 'long', day: 'numeric', year: 'numeric' };

const QuestionDetails = ({ asker, date, helpful, reported }) => {
  const convertDate = new Date(date);
  const newDate = convertDate.toLocaleDateString('default', options);

  return (
    <section>
      Helpful? <span class='clickable'>Yes</span> ({helpful})  |  <span class='clickable'>Add Answer</span>
    </section>
  );
}

export default QuestionDetails;