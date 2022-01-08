import React from 'react';

function ReviewsListSorting ({reviewsNum, setSort}) {
  return (
    <div className='sorted-drop-down'>
      <label htmlFor='filter-select'>{`${reviewsNum} reviews, sorted by `}</label>
      <select id='filter-select'
        onChange={(e) => {
          setSort(e.target.value);
        }}>
        <option defaultValue>relevant</option>
        <option>newest</option>
        <option>helpful</option>
      </select>
    </div>
  );
}

export default ReviewsListSorting;