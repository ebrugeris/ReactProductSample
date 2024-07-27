import { Button, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Add() {

  const [name, setname] = useState("")
  const [description, setdescription] = useState("")
  const [categories, setcategories] = useState("")


  const navigate = useNavigate()

  useEffect(() => {

    loadData()

  }, [])

  const loadData = () => {
    axios.get("https://northwind.vercel.app/api/categories")
      .then(res => setcategories(res.data))
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

  return <>
    <h1>Add Category Form</h1>
    <hr />
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={4}>
        <TextField fullWidth value={name} onChange={(e) => setname(e.target.value)} label="Name" />
      </Stack>
      <Stack direction={"row"} spacing={4}>
        <TextField fullWidth value={description} onChange={(e) => setdescription(e.target.value)} label="Description" />
      </Stack>
      <Stack>
        <Button onClick={add} sx={{ width: "25%" }} variant="contained">Add</Button>
      </Stack>
    </Stack>
  </>
}

export default Add