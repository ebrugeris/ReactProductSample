import React, { useState } from 'react'

function StyleStateSample() {

    const [marginLeft, setmarginLeft] = useState(0)

    const go = () => {
        var randomNumber = Math.floor(Math.random() * 500)
        setmarginLeft(marginLeft + randomNumber)
    }

    return <>
        <button onClick={go}>Go!</button>
        <div style={{ width: 200, height: 200, borderStyle: "solid", marginLeft:marginLeft }}>
            BOX-1
        </div>
    </>
}

export default StyleStateSample