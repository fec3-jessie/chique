import React, { useState } from 'react';
import { token, url } from '../../../../../config.js';
import axios from 'axios';

// class HelpfulTracker extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       yesScore: this.props.helpful,
//       yesClicked: false
//     }
//   }
// }

const HelpfulTracker = ({ ID, helpful, usage, reported }) => {
  const [yesCount, setYesCount] = useState(helpful);
  const [yesClicked, setYesClicked] = useState(false);
  const [reportState, setReportState] = useState(<u>Report</u>);
  const [reportClicked, setReportClicked] = useState(reported);

  const updateYesOrReport = (endpoint, body) => {
    axios.put(url + endpoint, body, { headers: { 'Authorization': token }})
      .catch(err => console.error('Error updating Yes or Report status: ', err))
  };

  const onYesClick = () => {
    let endpoint, body;
    if (yesClicked === false) {
      setYesCount(prevYesCount => prevYesCount + 1);
      setYesClicked(true);
      if (usage === 'answer') {
        endpoint = `/qa/answers/${ID}/helpful`;
        body = { helpfulness: yesCount };
        console.log('Endpoint: ', endpoint);
      } else if (usage === 'question') {
        endpoint = `/qa/questions/${ID}/helpful`;
        body = { question_helpfulness: yesCount };
      }
      updateYesOrReport(endpoint, body);
    }
  };

  const onReportClick = () => {
    let endpoint, body;
    if (reportClicked === false) {
      setReportState('Reported');
      setReportClicked(true);
      if (usage === 'question') {
        endpoint = `/qa/questions/${ID}/report`;
        body = { reported: reportState };
      }
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