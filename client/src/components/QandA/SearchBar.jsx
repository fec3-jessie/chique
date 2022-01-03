import React, { useState } from 'react';

const SearchBar = ({ setSearchText }) => {
  // const [searchText, setSearchText] = useState('');

  const onSearchTextChange = (event) => {
    const typedEntry = event.target.value;
    setSearchText(typedEntry);
  };

  return (
    <form action='' method=''>
      <input
        type='search'
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        size='60'
        onChange={onSearchTextChange}
      ></input>
    </form>

  );
};

export default SearchBar;