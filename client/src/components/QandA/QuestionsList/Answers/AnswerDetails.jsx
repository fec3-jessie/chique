import React from 'react';
import HelpfulTracker from '../HelpfulTracker.jsx';

const options = { month: 'long', day: 'numeric', year: 'numeric' };

const AnswerDetails = ({ name, date, helpfulness, ID }) => {
  const newDate = new Date(date).toLocaleDateString('default', options);

  return (
    <section>
      by {name}, {newDate} &nbsp;
      |&nbsp;
      <HelpfulTracker ID={ID} helpful={helpfulness} usage='answer'/>
      {/* Helpful? <span className='clickable'>Yes</span> ({helpfulness}) &nbsp;
      |
      &nbsp;<span className='clickable'>Report</span> */}
    </section>
  );
}

export default AnswerDetails;