import React, { useState, useEffect } from 'react';

function Clock(props) {
  const [date, setDate] = useState(new Date());

 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timerID);
    };
 });

   function tick() {
    setDate(new Date());
   }

   return (
      <div>
        <h2>{date.toLocaleTimeString()}</h2>
      </div>
    );
}

export default Clock;