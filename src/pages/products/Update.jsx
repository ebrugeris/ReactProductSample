import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

  const {id} = useParams()

  const [unitPrice, setunitPrice] = useState("")
  const [unitsInStock, setunitsInStock] = useState("")
  const [quantityPerUnit, setquantityPerUnit] = useState("")



  useEffect(() => {
    
    axios.get(`https://northwind.vercel.app/api/products/${id}`)
    .then(res => {
        
        setunitsInStock(res.data.unitsInStock)
        setquantityPerUnit(res.data.quantityPerUnit)
        setunitPrice(res.data.unitPrice)

    })
    
  }, [])

  const navigate = useNavigate()
  

  const update = () => {
      axios.put("https://northwind.vercel.app/api/products/" + id, {
        quantityPerUnit,
        unitsInStock,
        unitPrice
        
      })
      .then(res => {
        navigate("/products")
      })
  }

  return <>
  <h1>Update Page</h1>
  <h2>Id: {id}</h2>
  <div>
      <label htmlFor="">Quantity Per Unit</label>
      <input type='text' value={quantityPerUnit} onChange={(e) => setquantityPerUnit(e.target.value)} />
    </div>
    <div>
      <label htmlFor="">Units In Stock</label>
      <input type='text' value={unitsInStock} onChange={(e) => setunitsInStock(e.target.value)} />
    </div>
    <div>
      <label htmlFor="">Unit Price</label>
      <input type='text' value={unitPrice} onChange={(e) => setunitPrice(e.target.value)} />
    </div>
    
    <div>
      <button onClick={update}>Update</button>
    </div>
  </>
}

export default Update