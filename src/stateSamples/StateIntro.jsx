import React, { useState } from 'react'

function StateIntro() {

  const [textColor, setcolor] = useState("red")

  const changeColor = () => {
    setcolor("black") // bu fonksiyona ne değer VERİRSE ARTIK SENİN DEĞİŞKENİN ODUR
  }

  return <>
    <h1 style={{ color: textColor }}>Çağatay Yıldız</h1>
    <button onClick={changeColor}>Change Color</button>
  </>
}

export default StateIntro