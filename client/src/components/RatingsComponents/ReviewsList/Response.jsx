import React from 'react';

function Response ({response}) {

  return (
    <div className='response-tile'>
      <p className='response-title'>Response:</p>
      <p>{response}</p>
    </div>
  )
}

export default Response;