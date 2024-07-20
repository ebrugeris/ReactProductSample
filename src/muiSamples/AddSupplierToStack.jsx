import { Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

function AddSupplierToStack() {

  const [companyName, setcompanyName] = useState("")
  const [contactName, setcontactName] = useState("")
  const [contactTitle, setcontactTitle] = useState("")



  const add = () => {
    axios.post("https://northwind.vercel.app/api/suppliers", {
        companyName,
       contactName,
        contactTitle,
    }).then(res => {
      alert("Success!")
    })
  }


  return <>
    <Stack spacing={4} padding={10}>
      <Stack direction="row" justifyContent={"space-between"} spacing={4}>
        <TextField fullWidth id='companyName' label="Company Name" variant="outlined" onChange={(e) => setcompanyName(e.target.value)} />
        <TextField fullWidth id='contactName' label="Contact Name" variant="outlined" onChange={(e) => setcontactName(e.target.value)}  />
      </Stack>
      <Stack direction="row" justifyContent={'space-between'} spacing={4}>
        <TextField sx={{width: '4%' }} id='contactTitle' label="Contact Title" variant="outlined"  onChange={(e) => setcontactTitle(e.target.value)} />
      </Stack>
      <Stack direction={"row"}>
        <Button onClick={add} size="large" variant="contained">Add</Button>
      </Stack>
    </Stack>

  </>
}

export default AddSupplierToStack