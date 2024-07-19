import axios from 'axios'
import React, { useEffect, useState } from 'react'

function OrdersPage() {
    const [orders, setorders] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getOrders();
    }, [])


    const getOrders = () => {
        axios.get("https://northwind.vercel.app/api/orders")
            .then(res => {
                setorders(res.data)
                setloading(false)
            })
    }

    const deleteOrder = (id) => {

        var confirm = window.confirm("Are u sure?")

        if (confirm) {
            setloading(true)
            axios.delete("https://northwind.vercel.app/api/orders/" + id)
                .then(res => {
                    getOrders()
                })
        }



    }

    return <>
        {
            loading == true ? <h1>loading...</h1> : <>
                <h1>Length: {orders.length}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Order Date</th>
                            <th>Ship Name</th>
                            <th>City</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map(item => {
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.orderDate}</td>
                                    <td>{item.shipName}</td>
                                    <td>{item.shipAddress?.city}</td>
                                    <td>
                                        <button style={{ width: 100, height: 50, backgroundColor: 'red', color: 'white', padding: 0, border: 'none' }} onClick={() => deleteOrder(item.id)}>
                                            Delete Order
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </>
        }
    </>
}

export default OrdersPage