import React from 'react'
import useSWR from 'swr';
import { axiosInstanceJson } from '../../api/axiosInstance';
import { Box, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const fetcher = (url) => {
    return axiosInstanceJson.get(url).then(res => res.data)
} 

function CommentsSWR() {
    const { data, error, isLoading } = useSWR("comments",
        fetcher
    );

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

export default CommentsSWR