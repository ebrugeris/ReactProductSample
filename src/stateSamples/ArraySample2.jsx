import React, { useState } from 'react'

function ArraySample2() {

    const [numbers, setnumbers] = useState([3, 11, 20])


    let total = 0;

    numbers.forEach(item => {
        total = total + item
    })
    let avg = total / numbers.length


    //bu fonksiyon diziye 0-100 arasında bir sayı ekler!

    const addRandom = () => {
        var randomNumber = Math.floor(Math.random() * 100)
        let newNumbers = [...numbers, randomNumber]
        setnumbers(newNumbers)

    }

    const removeNumber = (key) => {
        numbers.splice(key, 1)
        setnumbers([...numbers])
    }
    return <>

        <h1>Avg: {avg.toFixed(2)}</h1>
        <h1>Total: {total}</h1>
        <button onClick={addRandom}>Add Random Number</button>
        <button onClick={() => setnumbers([])}>Clear</button>

        <ul>
            {
                numbers.map((item, key) => <li onClick={() => removeNumber(key)} style={{ fontSize: 30 }}>{item}</li>)
            }
        </ul>
    </>
}

export default ArraySample2