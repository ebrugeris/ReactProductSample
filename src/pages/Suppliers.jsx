import React, { useState, useEffect } from 'react'

function Suppliers() {

    const [suppliers, setsuppliers] = useState([])


    //useEffect component hazırlanırken SADECE BİR KERE çalışır.
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then(data => setsuppliers(data))
    }, [])



    return <>
        <ul>
            {
                suppliers.map(item => <li>{item.companyName}</li>)
            }
        </ul>
    </>
}

export default Suppliers