import axios from 'axios'
import React, { useEffect, useState } from 'react'


function OrderList() {
    const [orderlist, setorderlist] = useState([])


    useEffect(() => {
        
        axios.get("https://northwind.vercel.app/api/orders")
        .then(res => {
            setorderlist(res.data)
        })
    
    }, [])
    

    return <>
    {
           <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Customer Id</th>
                <th>Employee Id</th>
                <th>Order Date</th>
                <th>Ship Name</th>

            </tr>
        </thead>
        <tbody>
            {
                orderlist.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.customerId}</td>
                    <td>{item.employeeId}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.shipName}</td>


                </tr>)
            }
        </tbody>
    </table>
    }
    </>
}

export default OrderList