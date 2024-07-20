import { trTR } from '@mui/x-data-grid/locales';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function OrdersDataGrid() {

    const [orders, setorders] = useState([])

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/orders")
            .then(res => {
                setorders(res.data)
            })

    }, [])


    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.1
        },
        {
            field: "customerId",
            headerName: "Müşteri ID",
            flex: 0.3
        },
        {
            field: "shipName",
            headerName: "Kargo Adı",
            flex: 0.3
        }
    ]


    return <>
        <div style={{ height: 500 }}>
            <DataGrid
                rows={orders} //DataSource
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                    },
                  }}
                  localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
            />
        </div>
    </>
}

export default OrdersDataGrid