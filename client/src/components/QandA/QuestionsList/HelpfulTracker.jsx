import React, { useState } from 'react';
import axios from 'axios';
const localHost = 'http://127.0.0.1:3000';

const HelpfulTracker = ({ questionOrAnswer_id, helpful, usage, reported }) => {
  const [yesCount, setYesCount] = useState(helpful);
  const [yesClicked, setYesClicked] = useState(false);
  const [reportState, setReportState] = useState(<u>Report</u>);
  const [reportClicked, setReportClicked] = useState(reported);

  const updateYesOrReport = (endpoint, body) => {
    axios.put(localHost + endpoint, body)
      .catch(err => console.error('Error submitting PUT req (HelpfulTracker.jsx): ', err));
  };

  // usage will always be either 'question' or 'answer'
  const onYesClick = () => {
    let endpoint;
    let body;
    if (yesClicked === false) {
      endpoint = `/qa/${usage}s/${questionOrAnswer_id}/helpful`;
      body = { question_helpfulness: yesCount + 1 };
      // if (usage === 'answer') {
      //   endpoint = `/qa/answers/${questionOrAnswer_id}/helpful`;
      //   body = { helpfulness: yesCount + 1 };
      // } else if (usage === 'question') {
      //   endpoint = `/qa/questions/${questionOrAnswer_id}/helpful`;
      //   body = { question_helpfulness: yesCount + 1 };
      // }
      setYesCount(prevYesCount => prevYesCount + 1);
      setYesClicked(true);
      updateYesOrReport(endpoint, body);
    }
  };

  const onReportClick = () => {
    let endpoint;
    let body;
    if (reportClicked === false) {
      endpoint = `/qa/${usage}s/${questionOrAnswer_id}/report`;
      body = { reported: 'Reported' };
      // if (usage === 'question') {
      //   endpoint = `/qa/questions/${questionOrAnswer_id}/report`;
      //   body = { reported: 'Reported' };
      // } else if (usage === 'answer') {
      //   endpoint = `/qa/answers/${questionOrAnswer_id}/report`;
      //   body = { reported: 'Reported' };
      // }
      setReportState('Reported');
      setReportClicked(true);
      updateYesOrReport(endpoint, body);
    }
  };

  return (
    <div className='QA-helpful'>
      Helpful?&nbsp;
      <span onClick={onYesClick} className='clickable'><u>Yes</u></span> ({ yesCount })
      <>
      &nbsp; | &nbsp;
        <span onClick={onReportClick} className='clickable'>{reportState}</span>
        &nbsp;&nbsp;&nbsp;
      </>

    </div>
  );
};

export default HelpfulTracker;
