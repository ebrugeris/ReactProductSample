import { trTR } from '@mui/x-data-grid/locales';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Stack } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom'

function List() {

    const [categories, setcategories] = useState([])
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        loadData()
    
      }, [])
    
      const loadData = () => {
        axios.get("https://northwind.vercel.app/api/categories")
          .then(res => {setcategories(res.data)})
      }
   

      const add = () => {
        axios.post("https://northwind.vercel.app/api/categories", {
            name,
            description
        })
          .then(res => {
            navigate("/list") 
            loadData()
          })
    
      }

      const updateCategories = () => {
        axios.put("https://northwind.vercel.app/api/categories/" + id, {
          name,
          description
        })
        .then(res => {
          navigate("/categories/update")
        })
    }

    const deleteCategories = (row) => {

        axios.delete("https://northwind.vercel.app/api/categories/", row.id)
            .then(res => {
                loadData()
            })

    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.1
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.2
        },
        {
            field: "description",
            headerName: "Description",
            flex: 0.2
        },
        {
            field: "Detail",
            headerName: "Detail",
            flex: 0.15
        },
        {
            field: "Update",
            headerName: "Update",
            flex: 0.15,
            renderCell:(item) => <Button onClick={() => navigate("/categories/update/" + item.row.id)} variant="contained" >Update</Button>
        },
        {
            field:"delete",
            headerName:"Delete",
            flex:0.2,
            renderCell:(item) => <Button onClick={() => deleteCategories(item.row)}>Delete</Button>
        },
    ]


    return <>
        <div style={{ height: 500 }}>
            <DataGrid
                rows={categories} //DataSource
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
        <Stack>
        <Button onClick={add} sx={{ width: "25%" }} variant="contained">Add</Button>
      </Stack>

    </>
}

export default List