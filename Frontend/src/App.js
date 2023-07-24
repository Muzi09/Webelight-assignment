import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import DataTable from "./components/DataTable";
import PurchaseHistory from "./components/PurchaseHistory";
import Home from "./components/Filter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DataTable />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/purchasehistory" element={<PurchaseHistory/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
