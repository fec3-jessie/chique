import React from 'react';
import SearchBar from './QandA/SearchBar.jsx';
import QuestionsList from './QandA/QuestionsList/QuestionsList.jsx';

const QandA = (props) => {

  return (
    <div>
      <p>Questions & Answers</p>
      <SearchBar />
      <QuestionsList />
    </div>
  );
}

export default QandA;