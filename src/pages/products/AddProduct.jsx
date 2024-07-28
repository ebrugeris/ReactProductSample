import React, { useState } from 'react'
import { axiosInstance } from '../../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

function AddProduct() {

    const [formData, setformData] = useState({
        name: "",
        unitPrice: "",
        unitsInStock: "",
        quantityPerUnit: ""
    })

    const navigate = useNavigate()


    const handleChange = (e) => {

        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosInstance.post("products", formData)
            .then(res => {
                navigate("/ProductList")
            })
    }


  return <>
  <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="">Name</label>
        <input required type="text" name="name" onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="">Unit Price</label>
        <input required type="text" name="unitPrice" onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="">Units In Stock</label>
        <input required type="text" name="unitsInStock" onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="">Quantity Per Unit</label>
        <input required type="text" name="quantityPerUnit" onChange={handleChange} />
    </div>
    <div>
        <button type='submit'>Add</button>
    </div>
  </form>
  
  </>
}

export default AddProduct