import React, { useContext, useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box, Button, CircularProgress, IconButton, Stack } from '@mui/material'
import { baseService } from '../../api/baseService'
import { useNavigate } from 'react-router-dom'
import { FavoritesContext } from '../../context/FavoritesContext'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function ListOrders() {


    const [orders, setorders] = useState([])
    const [loading, setloading] = useState(true)

    const { favOperation, favorites } = useContext(FavoritesContext)

    const navigate = useNavigate()

    useEffect(() => {
        loadData()
    }, [])


    const loadData = () => {
        baseService.getAll("orders")
            .then(data => {
                setorders(data)
                setloading(false)
            })
    }


    const deleteOrder = (row) => {

        baseService.delete("orders", row.id)
            .then(res => {

                loadData()
            })

    }

    const columns = [
        {
            field: "orderDate",
            headerName: "Order Date",
            flex: 0.1
        },
        {
            field: "requiredDate",
            headerName: "Required Date",
            flex: 0.1
        },
        {
            field: "shippedDate",
            headerName: "Shipped Date",
            flex: 0.2
        },
        {
            field: "customerId",
            headerName: "Customer ID",
            flex: 0.15
        },
         {
             field: "Delete",
            headerName: "Delete",
             flex: 0.1,
             renderCell: (item) => <Button onClick={() => deleteOrder(item.row)} >Delete</Button>
         },
        {
            field: "Add to Favorites",
            headerName: "Add to Favorites",
            flex: 0.1,
            renderCell: (item) => <IconButton onClick={() => favOperation(item.row)}>
                {
                    isFavorite(item.row.id) ?
                        <StarIcon />
                        :
                        <StarBorderIcon />
                }
            </IconButton>
        }
    ]

    const isFavorite = (id) => {
        let favItem = favorites.find(f => f.id === id)
        if(favItem)
            return true
        else
            return false 
    }


    return <>
        <Stack direction="row" justifyContent="flex-end">
            <Button onClick={() => navigate("/orders/add")} sx={{ width: 150 }} variant="contained">Add New</Button>
        </Stack>
        <hr />
        <div style={{ height: 400 }}>
            {
                loading === true ? <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <CircularProgress />
                </Box> : <DataGrid
                    rows={orders}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                />
            }

        </div>
    </>
}

export default ListOrders