import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function DashboardLayout({ children }) {
    return <>
        <Navbar />
        <div style={{padding:"3%"}}>
            {children}
        </div>
        <Footer />
    </>
}

export default DashboardLayout