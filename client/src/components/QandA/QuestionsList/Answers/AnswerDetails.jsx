import React from 'react';

const options = { month: 'long', day: 'numeric', year: 'numeric' };

const AnswerDetails = ({ name, date, helpfulness, ID }) => {
  const convertDate = new Date(date);
  const newDate = convertDate.toLocaleDateString('en-US', options);

  return (
    <section>
        by {name}, {newDate} | Helpful? <span class='clickable'>Yes</span> ({helpfulness}) | <span class='clickable'>Report</span>
    </section>
  );
}

export default AnswerDetails;