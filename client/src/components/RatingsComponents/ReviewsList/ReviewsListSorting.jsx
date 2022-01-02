import React from 'react';

function ReviewsListSorting ({reviewsNum, handleChangeSort}) {
  return (
    <div className='sorted-drop-down'>
      <label htmlFor='filter-select'>{`${reviewsNum} reviews, sorted by `}</label>
      <select id='filter-select'
        onChange={(e) => {
          // handleChangeSort(e.target.value);
          console.log('you clicked:::', e.target.value);
        }}>
        <option defaultValue>relevant</option>
        <option>newest</option>
        <option>helpful</option>
      </select>
    </div>
  );
}

export default ReviewsListSorting;