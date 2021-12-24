import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function UserTimeTile () {

  return (
    <div className='user-time-tile'>
      <h3>this is username for tile.</h3>
      <h3>this is timestamp for tile.</h3>
      <FontAwesomeIcon icon={faCheckCircle} />
    </div>
  )
}


export default UserTimeTile;