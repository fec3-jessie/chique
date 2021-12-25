import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Recommendation () {

  return (
    <div className='recommendation'>
      <p><FontAwesomeIcon icon={faCheck} className='check'/>I recommend this product</p>
    </div>
  )
}

export default Recommendation;