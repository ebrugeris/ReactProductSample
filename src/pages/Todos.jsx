import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Todos() {
    const [todos, settodos] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(() => {
        
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            settodos(res.data)
            setloading(false)
        })
    
    }, [])
    

    return <>
    {
        loading == true ? <h1>Loading...</h1> :     <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>User Id</th>
            </tr>
        </thead>
        <tbody>
            {
                todos.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.userId}</td>

                </tr>)
            }
        </tbody>
    </table>
    }
    </>
}

export default Todos