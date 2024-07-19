import React, { useState } from 'react'

function BooleanSample() {

  const [onlineStatus, setonlineStatus] = useState(true)
  

  return <>
    {
      onlineStatus ? <h1>User Online</h1> : <h1>User Offline</h1>
    }
    <button onClick={() => setonlineStatus(!onlineStatus)}>Change Status</button>
  </>
}

export default BooleanSample