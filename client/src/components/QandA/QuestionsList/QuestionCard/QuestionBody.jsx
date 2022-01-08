import React from 'react';

const QuestionBody = ({ body, onAccordionClick }) => {
  return (
    <>
      <div
        className='QA-question-body'
        onClick={onAccordionClick}
      >
        {body}
      </div>
    </>

  );
};

export default QuestionBody;