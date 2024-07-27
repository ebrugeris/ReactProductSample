import { Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

  const {id} = useParams()

  const [name, setname] = useState("")
  const [description, setdescription] = useState("")


  useEffect(() => {
    
    axios.get(`https://northwind.vercel.app/api/categories/${id}`)
    .then(res => {
      setname(res.data.name)
      setdescription(res.data.description)
    })
    
  }, [])

  const navigate = useNavigate()
  

  const update = () => {
      axios.put("https://northwind.vercel.app/api/categories/" + id, {
        name,
        description
      })
      .then(res => {
        navigate("/list")
      })
  }

  return <>
   <h1>Update Product Form</h1>
    <hr />
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={4}>
        <TextField fullWidth value={name} onChange={(e) => setname(e.target.value)} label="Name" />
      </Stack>
      <Stack direction={"row"} spacing={4}>
        <TextField fullWidth value={description} onChange={(e) => setdescription(e.target.value)} label="Description" />
       
      </Stack>
      <Stack>
        <Button onClick={update} sx={{ width: "25%" }} variant="contained">Update</Button>
      </Stack>

    </Stack>
  </>
}

export default Update