import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StarsTile () {

  return (
    <div className='stars-tile'>
      <h2>this is the stars for tile.</h2>
      <FontAwesomeIcon icon={faStar} />
    </div>
  )
}


export default StarsTile;