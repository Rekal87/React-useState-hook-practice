import React, { useState } from "react";

function Time() {
  let time = new Date().toLocaleTimeString("en-GB");
  const [state, setState] = useState({ time });

  function getTime() {
    setState({ state });
  }
  setInterval(getTime, 1000);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default Time;
