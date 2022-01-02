import React, { useState } from 'react';
// import { token, url } from '/config.js';
import axios from 'axios';
const localHost = 'http://127.0.0.1:3000';

// class HelpfulTracker extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       yesScore: this.props.helpful,
//       yesClicked: false
//     }
//   }
// }

const HelpfulTracker = ({ question_id, helpful, usage, reported }) => {
  const [yesCount, setYesCount] = useState(helpful);
  const [yesClicked, setYesClicked] = useState(false);
  const [reportState, setReportState] = useState(<u>Report</u>);
  const [reportClicked, setReportClicked] = useState(reported);

  const updateYesOrReport = (endpoint, body) => {
    // axios.put(url + endpoint, body, { headers: { 'Authorization': token }})
    axios.put(localHost + endpoint, body)
      .catch(err => console.error('Error submitting PUT req (HelpfulTracker.jsx): ', err))
  };

  const onYesClick = () => {
    let endpoint, body;
    if (yesClicked === false) {
      // setYesCount(prevYesCount => prevYesCount + 1);
      // setYesClicked(true);
      if (usage === 'answer') {
        endpoint = `/qa/answers/${question_id}/helpful`;
        body = { helpfulness: yesCount + 1 };
      } else if (usage === 'question') {
        endpoint = `/qa/questions/${question_id}/helpful`;
        body = { question_helpfulness: yesCount + 1 };
      }
      setYesCount(prevYesCount => prevYesCount + 1);
      setYesClicked(true);
      updateYesOrReport(endpoint, body);
    }
  };

  const onReportClick = () => {
    let endpoint, body;
    if (reportClicked === false) {
      // setReportState('Reported');
      // setReportClicked(true);
      if (usage === 'question') {
        endpoint = `/qa/questions/${question_id}/report`;
        body = { reported: 'Reported' };
      }
      setReportState('Reported');
      setReportClicked(true);
      updateYesOrReport(endpoint, body);
    }
  };

  return (
    <div>
      Helpful?&nbsp;
      <span onClick={onYesClick} className='clickable'><u>Yes</u></span> ({ yesCount })
      {usage === 'answer' ? null :
      <>
        &nbsp; | &nbsp;
        <span onClick={onReportClick} className='clickable'>{reportState}</span>
      </>
      }
    </div>
  );
}

export default HelpfulTracker;