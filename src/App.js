import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header'
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import Order from './Component/Order/Order';
import Shop from './Component/Shop/Shop';
import SignUp from './Component/SignUp/SignUp';
function App() {
  return (
    <div className="">
   <Header></Header>
<Routes>
  <Route path="/" element={<Shop></Shop>}></Route>
  <Route path="/shop" element={<Shop></Shop>}></Route>
  <Route path="/order" element={<Order></Order>}></Route>
  <Route path="/inventory" element={<Inventory></Inventory>}></Route>
  <Route path="/about" element={<About></About>}></Route>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path="/signup" element={<SignUp></SignUp>}></Route>
</Routes>

    </div>
  );
}

export default App;
