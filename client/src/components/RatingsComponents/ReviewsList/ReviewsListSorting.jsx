import React from 'react';

function ReviewsListSorting ({reviewsNum}) {
  return (
    <div className='sorted-drop-down'>
      <label htmlFor='filter-select'>{`${reviewsNum} reviews, sorted by `}</label>
      <select id='filter-select'>
        <option defaultValue>relevance</option>
        <option>newest</option>
        <option>helpful</option>
      </select>
    </div>
  )
}

export default ReviewsListSorting;