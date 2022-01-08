import React from 'react';
import { useState } from 'react';



function UserTimeTile ({user, time}) {
  let date = new Date(time).toLocaleString('default', {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <div className='user-time-tile'>
      <p>{`☑ ${user} ${date}`}</p>
    </div>
  );
}


export default UserTimeTile;