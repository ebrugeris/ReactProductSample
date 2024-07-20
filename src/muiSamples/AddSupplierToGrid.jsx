import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AddSupplierToGrid() {
    
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
        <Grid container spacing={2}>
            <Grid item xs={6} >
                Company Name
                 <TextField fullWidth name='companyName'  variant="outlined" onChange={(e) => setcompanyName(e.target.value)} />         
            </Grid>
            <Grid item xs={6} >   
                    Contact Name
                    <TextField fullWidth name='contactName' variant="outlined" onChange={(e) => setcontactName(e.target.value)}  />
            </Grid>
            <Grid item xs={12} >
                    Contact Title
                    <TextField fullWidth name='contactTitle'  variant="outlined"  onChange={(e) => setcontactTitle(e.target.value)} />
            </Grid>
            <Grid item xs={12} >
                   <Button variant="contained">Add</Button>
            </Grid>
        </Grid>
    </>
}

export default AddSupplierToGrid