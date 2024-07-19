import React, { useState } from 'react'

function StyleStateSample2() {

    const [color, setcolor] = useState("red")

    let colors = ["red", "black", "blue", "yellow", "orange", "pink", "brown", "white", "gray", "purple", "aqua"]


    const changeColor = () => {
        var randomColorIndex = Math.floor(Math.random() * colors.length)
        setcolor(colors[randomColorIndex])
    }

    return <>
        <button onClick={changeColor}>Change Color</button>
        <div style={{ width: 200, height: 200, backgroundColor:color }}>

        </div>
    </>
}

export default StyleStateSample2