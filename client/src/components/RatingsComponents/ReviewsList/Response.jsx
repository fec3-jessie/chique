import React from 'react';

function Response ({response}) {

  return (
    <div className='response-tile'>
      <p className='response-title'>Response:</p>
      <p className='response-p'>{response}</p>
    </div>
  );
}

export default Response;