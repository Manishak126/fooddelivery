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
import StoreContextProvider from './context/StoreContext';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import ScrollToTop from "react-scroll-to-top";

const App = () => {

  const [showLogin, setShowLogin]= useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}{/*If showLogin is true show the LoginPopUp component else return fragment */}
    <div className='app'>
      <Router>
        <StoreContextProvider>
          <Navbar setShowLogin={setShowLogin}/>
          <ScrollToTop width='20' height='20'
          smooth/>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/order" element={<PlaceOrder/>}></Route>
          </Routes>
        </StoreContextProvider>
          
          
      </Router>
    </div>
      <Footer/>
    </>
  )
}

export default App
