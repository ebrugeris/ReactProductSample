import { Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { queryClient } from '../..'

function Comments() {

    const { data, isLoading, error } = useQuery({
        queryKey: 'comments',
        queryFn: async () => {
           return axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(res => res.data)
        }, 
    })

    const refresh = () => {
        queryClient.invalidateQueries(['comments'])
    }

    return <>
    <Button onClick={refresh}>Refresh</Button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {isLoading && <tr><td>Loading...</td></tr>}
                {data && data.map(comment => <tr key={comment.id}>
                    <td>{comment.id}</td>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.body}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}

export default Comments