import React from 'react';
import SearchBar from './QandA/SearchBar.jsx';
import QuestionsList from './QandA/QuestionsList.jsx';

const QandA = ({ product_id, product_name }) => {

  return (
    <div>
      <p>Questions & Answers</p>
      <SearchBar />
      <QuestionsList product_id={40356} product_name={product_name}/>
    </div>
  );
};

export default QandA;