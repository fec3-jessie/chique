import React from 'react';
import { useState } from 'react';

let user = 'username ';
let time = 'time';

function UserTimeTile () {

  return (
    <div className='user-time-tile'>
      <p>{`☑ ${user} ${time}`}</p>
    </div>
  )
}


export default UserTimeTile;