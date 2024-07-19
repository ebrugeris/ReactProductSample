import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {

  var { id } = useParams()
  const [product, setproduct] = useState({})

  const navigate = useNavigate()

  useEffect(() => {

    axios.get(`https://northwind.vercel.app/api/products/${id}`)
      .then(res => setproduct(res.data))

  }, [])

  const goBack = () => {
    // navigate("/suppliers")
    navigate(-1)
  }

  return <>
    <h1>Detail Page</h1>
    <button onClick={goBack}>Go BACK!</button>
    <hr />
    <h2>Id: {id}</h2>
    <h2>Category Id: {product.categoryId}</h2>
    <h2>Quantity Per Unit: {product.quantityPerUnit}</h2>
    <h2>Unit Price : {product.unitPrice}</h2>
    <h2>units In Stock: {product.unitsInStock}</h2>

  </>
}

export default Detail