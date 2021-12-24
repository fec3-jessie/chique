import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StarsTile () {

  return (
    <div className='stars-tile'>
      <p><FontAwesomeIcon icon={faStar} /> this is the stars for tile.</p>
    </div>
  )
}


export default StarsTile;