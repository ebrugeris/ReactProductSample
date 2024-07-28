
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";


function useProducts(){

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState({})



    useEffect(() => {
        
        axiosInstance.get("products")
        .then(res => {
            setproducts(res.data)
            setloading(false)
        })
        .catch(err => {
            seterror(err)
            setloading(false)
        })

    }, [])


    return {products, loading, error}   
}

export default useProducts