import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {

  const [categoryId, setcategoryId] = useState("")
  const [unitPrice, setunitPrice] = useState("")
  const [unitsInStock, setunitsInStock] = useState("")

  const navigate = useNavigate()


  const add = () => {
    axios.post("https://northwind.vercel.app/api/products", {
        categoryId,
        unitPrice,
        unitsInStock
    })
      .then(res => {
        navigate("/products")
      })

  }

  return <>
    <h1>Add New Product</h1>
    <div>
      <label htmlFor="">Category Id</label>
      <input type='text' onChange={(e) => setcategoryId(e.target.value)} />
    </div>
    <div>
      <label htmlFor="">Unit Price</label>
      <input type='text' onChange={(e) => setunitPrice(e.target.value)} />
    </div>
    <div>
      <label htmlFor="">Units In Stock</label>
      <input type='text' onChange={(e) => setunitsInStock(e.target.value)} />
    </div>
    <div>
      <button onClick={add}>Add</button>
    </div>
  </>
}

export default Add