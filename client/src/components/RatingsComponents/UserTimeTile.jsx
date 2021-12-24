import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

let user = 'username ';
let time = 'time';

function UserTimeTile () {

  return (
    <div className='user-time-tile'>
      <p><FontAwesomeIcon icon={faCheckCircle} className='check-icon'/> {`${user} ${time}`}</p>
    </div>
  )
}


export default UserTimeTile;