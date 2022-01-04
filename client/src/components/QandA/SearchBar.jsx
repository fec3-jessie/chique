import React from 'react';

const SearchBar = ({ setSearchText }) => {

  const onSearchTextChange = (event) => {
    const typedEntry = event.target.value;
    setSearchText(typedEntry);
  };

  return (
    <form action='' method='' id='QA-search-bar'>
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