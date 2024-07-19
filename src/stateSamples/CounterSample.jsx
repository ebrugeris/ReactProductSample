import React, { useState } from 'react'

function CounterSample() {

  const [counter, setcounter] = useState(0)

  return <>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
  </>
}

export default CounterSample