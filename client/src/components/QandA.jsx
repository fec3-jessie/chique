import React, { useState } from 'react';
import SearchBar from './QandA/SearchBar.jsx';
import QuestionsList from './QandA/QuestionsList.jsx';

const QandA = ({ product_id, product_name }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <p id='QA-section-title'>Questions & Answers</p>
      <SearchBar setSearchText={setSearchText}/>
      <QuestionsList
        //product_id={40356}
        product_id={product_id}
        product_name={product_name}
        searchText={searchText}
      />
    </div>
  );
};

export default QandA;