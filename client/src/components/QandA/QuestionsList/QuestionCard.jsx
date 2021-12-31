import React from 'react';
import QuestionBody from './QuestionCard/QuestionBody.jsx';
import Answers from './Answers.jsx';
import QuestionDetails from './QuestionCard/QuestionDetails.jsx';

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerCounter: 0,
      showMoreBtn: false,
      showCollapseBtn: false
    }
    this.onSeeMoreClick = this.onSeeMoreClick.bind(this);
    this.onCollapseClick = this.onCollapseClick.bind(this);
  }

  componentDidMount() {
    this.initialSetter();
  }

  initialSetter() {
    if (Object.keys(this.props.answers).length <= 2) {
      this.setState({
        answerCounter: Object.keys(this.props.answers).length
      })
    } else {
      this.setState({
        answerCounter: 2,
        showMoreBtn: true
      })
    }
  }

  onSeeMoreClick() {
    if (Object.keys(this.props.answers).length - this.state.answerCounter === 0) {
      this.setState({
        showCollapseBtn: true
      })
    } else if (Object.keys(this.props.answers).length - this.state.answerCounter <= 2) {
      this.setState({
        answerCounter: Object.keys(this.props.answers).length,
        showCollapseBtn: true
      })
    } else {
      this.setState({
        answerCounter: this.state.answerCounter + 2
      })
    }
  }

  onCollapseClick() {
    // this.initialSetter();
    if (Object.keys(this.props.answers).length <= 2) {
      this.setState({
        answerCounter: Object.keys(this.props.answers).length,
        showCollapseBtn: false
      })
    } else {
      this.setState({
        answerCounter: 2,
        showMoreBtn: true,
        showCollapseBtn: false
      })
    }
  }

  render() {
    return (
      <div id='Question-Card'>
      <QuestionDetails
        asker={this.props.asker}
        date={this.props.date}
        helpful={this.props.helpful}
        reported={this.props.reported}
        ID={this.props.ID}
      />
      <div className='symbol question-symbol'>Q:</div>
      <QuestionBody body={this.props.body}/>
      {Object.keys(this.props.answers).length > 0 ?
      <>
        <div className='symbol answer-symbol'>A:</div>
        <Answers
          answers={this.props.answers}
          key={this.props.ID * 3}
          answerCounter={this.state.answerCounter}
          showMore={this.state.showMoreBtn}
          collapse={this.state.showCollapseBtn}
        />
        {
          !this.state.showMoreBtn ? null
            : !this.state.showCollapseBtn
              ? <button onClick={this.onSeeMoreClick}>See more answers</button>
              : <button onClick={this.onCollapseClick}>Collapse answers</button>
        }
      </> :
        null
      }
    </div>
    );
  }
}

// const QuestionCard = ({ answers, asker, body, date, helpful, reported, ID }) => {
//   const answerCounter = useRef(0);
//   const showMoreBtn = useRef(false);
//   const showCollapseBtn = useRef(false);
//   // const [showMoreBtn, setShowMoreBtn] = useState(false);
//   // const [showCollapseBtn, setShowCollapseBtn] = useState(false);
//   // const [answerCounter, setAnswerCounter] = useState(0);

//   useEffect(() => {
//     if (Object.keys(answers).length <= 2) {
//       answerCounter.current = Object.keys(answers).length;
//       // setAnswerCounter(Object.keys(answers).length);
//     } else {
//       answerCounter.current = 2;
//       // setAnswerCounter(2);
//       // setShowMoreBtn(true);
//       showMoreBtn.current = true;
//     }
//   });


//   const onSeeMoreClick = () => {
//     if (Object.keys(answers).length - answerCounter === 0) {
//       showCollapseBtn.current = true;
//       // setShowCollapseBtn(true);
//     } else if (Object.keys(answers).length - answerCounter <= 2) {
//       answerCounter.current = Object.keys(answers).length;
//       // setAnswerCounter(Object.keys(answers).length);
//       showCollapseBtn.current = true;
//     } else {
//       answerCounter.current = answerCounter.current + 2;
//       // setAnswerCounter(prevAnswerCounter => prevAnswerCounter + 2);
//     }
//   }

//   const onCollapseClick = () => {

//   }

//   return (
//     <div id='Question-Card'>
//       <QuestionDetails
//         asker={asker}
//         date={date}
//         helpful={helpful}
//         reported={reported}
//       />
//       <div className='symbol question-symbol'>Q:</div>
//       <QuestionBody body={body}/>
//       <div className='symbol answer-symbol'>A:</div>
//       <Answers answers={answers} key={ID * 3} answerCounter={answerCounter} a={showMoreBtn} b={showCollapseBtn}/>
//       {
//         !showMoreBtn ? null
//           : !showCollapseBtn
//             ? <button onClick={onSeeMoreClick}>See more answers</button>
//             : <button onClick={onCollapseClick}>Collapse answers</button>
//       }
//     </div>
//   );
// }

export default QuestionCard;