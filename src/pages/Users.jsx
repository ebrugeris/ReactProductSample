import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setusers] = useState([])

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setusers(data))

    }, [])

    return <>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>EMail</th>
            </tr>
        </thead>
        <tbody>
            {
              users &&  users.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>

                </tr>)
            }
        </tbody>
    </table>
    </>
}

export default Users