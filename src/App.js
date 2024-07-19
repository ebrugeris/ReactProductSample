
import HomePage from "./pages/HomePage"
import { Link, Route, Routes } from "react-router-dom"
import ProfilePage from "./pages/ProfilePage"
import Users from "./pages/Users"
import Todos from "./pages/Todos"
import OrdersPage from "./pages/OrdersPage"
// import List from "./pages/suppliers/List"
// import Add from "./pages/suppliers/Add"
// import Update from "./pages/suppliers/Update"
// import Detail from './pages/suppliers/Detail'
import ListProducts from "./pages/products/ListProducts"
import AddProduct from "./pages/products/Add"
import UpdateProduct from "./pages/products/Update"
import DetailProduct from './pages/products/Detail'


function App() {


  return <>
  <ul style={{display:'flex', justifyContent:"space-evenly"}}>
    <Link to='/'>Home</Link>

    <Link to='/products'>Products</Link>

    {/* <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/products'>Products</Link>
    <Link to='/profile'>Profile</Link>
    <Link to='/suppliers'>Suppliers</Link>
    <Link to='/users'>Users</Link>
    <Link to='/todos'>Todos</Link>
    <Link to='/add-product'>Add Product</Link>
    <Link to='/orders'>Orders</Link> */}
  </ul>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<Users/>} />
      <Route path="/todos" element={<Todos/>} />

      {/* Product routes */}
      <Route path="/products" element={<ListProducts/>}/>
      <Route path="/products/add" element={<AddProduct/>}/>
      <Route path="/products/update/:id" element={<UpdateProduct/>}/>
      <Route path="/products/detail/:id" element={<DetailProduct/>}/>


    </Routes>

  </>
}

export default App


//STATE, PROPS, EFFECT