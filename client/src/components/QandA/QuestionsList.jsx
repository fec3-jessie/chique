import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { token, url } from '/config.js';
import QuestionCard from './QuestionsList/QuestionCard.jsx';
import AddQuestionOrAnswer from './QuestionsList/QuestionCard/AddQuestionOrAnswer.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionCounter: 0
    };
    this.onMoreQuestionsClick = this.onMoreQuestionsClick.bind(this);
    this.onCollapseQuestionsClick = this.onCollapseQuestionsClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/qa/questions', {params: { product_id: this.props.product_id }})
      .then(returnedQuestions => {
        this.setState({
          questions: returnedQuestions.data.results,
          questionCounter: 2
        });
      })
      .catch(err => console.error('Error receiving response (QuestionsList.jsx): ', err));
  }

  onMoreQuestionsClick() {
    if (this.state.questions.length - this.state.questionCounter <= 2) {
      this.setState({
        questionCounter: this.state.questions.length
      });
    } else {
      this.setState({
        questionCounter: this.state.questionCounter + 2
      });
    }
  }

  onCollapseQuestionsClick() {
    this.setState({
      questionCounter: 2
    });
  }

  render() {
    let sortedQuestions = this.state.questions.sort((a, b) =>
      b.question_helpfulness - a.question_helpfulness);

    return (
      <>
        {sortedQuestions.slice(0, this.state.questionCounter).map(item =>
          <QuestionCard
            answers={item.answers}
            asker={item.asker_name}
            body={item.question_body}
            date={item.question_date}
            helpful={item.question_helpfulness}
            key={item.question_id}
            reported={item.reported}
            question_id={item.question_id}
            product_name={this.props.product_name}
          />
        )}
        {this.state.questions.length <= 2
          ? null :
          this.state.questions.length === this.state.questionCounter
            ? <button onClick={this.onCollapseQuestionsClick}>Collapse Answered Questions</button>
            : <button onClick={this.onMoreQuestionsClick}>More Answered Questions</button>
        }
        <AddQuestionOrAnswer
          questionOrProduct_id={this.props.product_id}
          product_name={this.props.product_name}
          usage={'addQuestion'}
        />
      </>
    );
  }
}

export default QuestionsList;
