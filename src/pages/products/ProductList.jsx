import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../api/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import useProducts from './useProducts'

function ProductList() {

    const [products, setproducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        axiosInstance.get("products")
        .then(res => {
            setproducts(res.data)
        })
    }

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 0.2
        },
        {
            field: "unitPrice",
            headerName: "Unit Price",
            flex: 0.2
        },
        {
            field: "unitsInStock",
            headerName: "Units In Stock",
            flex: 0.2
        },
        {
            field: "quantityPerUnit",
            headerName: "Quantity Per Unit",
            flex: 0.2
        },
        {
            field:"delete",
            headerName:"Delete",
            flex:0.2,
            renderCell: (params) => {
                return <Button variant="contained" color="error" onClick={() => deleteProduct(params.row.id)}>Delete</Button>
            }
        }
    ]

    const deleteProduct = (id) => {
        axiosInstance.delete("products/" + id)
            .then(res => {
                loadProducts()
            }
        )
    }


    return <>
    <div style={{ height: 400, width: '100%' }}>
        <Link  to="/addproduct">Add Product</Link>
        <hr />
        <DataGrid
            rows={products}
            columns={columns}
        />
    </div>
    </>
}

export default ProductList