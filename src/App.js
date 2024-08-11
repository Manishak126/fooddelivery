import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import ScrollToTop from "react-scroll-to-top";
import Verify from './pages/Verify/Verify.js';
import Myorders from './pages/MyOrders/Myorders.js';

const App = () => {

  const [showLogin, setShowLogin]= useState(false)
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      {/*If showLogin is true show the LoginPopUp component else return fragment */}
      <div className="app">
        <Router>
            <Navbar setShowLogin={setShowLogin} />
            <ScrollToTop width="20" height="20" smooth />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route exact path="/order" element={<PlaceOrder />}></Route>
              <Route exact path='/verify' element={<Verify/>}></Route>
              <Route exact path='/myorders' element={<Myorders/>}></Route>
            </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App
