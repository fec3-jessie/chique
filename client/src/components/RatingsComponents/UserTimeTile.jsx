import React from 'react';
import { useState } from 'react';


let time = 'time';

function UserTimeTile ({user}) {

  return (
    <div className='user-time-tile'>
      <p>{`☑ ${user} ${time}`}</p>
    </div>
  )
}


export default UserTimeTile;