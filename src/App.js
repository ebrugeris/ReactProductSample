
import { Route, Routes } from "react-router-dom"
import ListOrders from "./pages/orders/ListOrders"
import DashboardLayout from "./layout/DashboardLayout"
import Favorites from "./pages/orders/Favorites"
import AddProduct from "./pages/products/AddProduct"
import ProductList from "./pages/products/ProductList"


function App() {
  return <>
  
   <DashboardLayout>
      <Routes>
        <Route path="/orders" element={<ListOrders />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/productlist" element={<ProductList />} />   
      </Routes>
    </DashboardLayout>
  </>
}

export default App