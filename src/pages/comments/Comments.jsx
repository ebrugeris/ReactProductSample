import { Box, CircularProgress } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { queryClient } from '../..'
import { DataGrid } from '@mui/x-data-grid'

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

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.15
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.25
        },
        {
            field: "email",
            headerName: "Email",
            flex: 0.25
        },
        {
            field: "body",
            headerName: "Body",
            flex: 0.35
        }
    ]


    return <>
       <div style={{ height: 400 }}>
            {
                isLoading == true ? <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <CircularProgress />
                </Box> : <DataGrid
                    rows={data}
                    columns={columns}
                />
            }

        </div>
    </>
}

export default Comments