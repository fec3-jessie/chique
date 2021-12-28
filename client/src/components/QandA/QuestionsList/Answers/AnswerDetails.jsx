import React from 'react';

const AnswerDetails = ({ name, date, helpfulness, ID }) => {
  return (
    <section>
        by {name}, {date} | Helpful? <span>Yes ({helpfulness})</span> | <span>Report</span>
    </section>
  );
}

export default AnswerDetails;