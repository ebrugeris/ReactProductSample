
import { Route, Routes } from "react-router-dom"
import ListOrders from "./pages/orders/ListOrders"
import DashboardLayout from "./layout/DashboardLayout"
import Favorites from "./pages/orders/Favorites"


function App() {
  return <>
  
   <DashboardLayout>
      <Routes>
        <Route path="/orders" element={<ListOrders />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </DashboardLayout>

  </>
}

export default App


//STATE, PROPS, EFFECT