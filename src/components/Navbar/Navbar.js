import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {CiSearch} from "react-icons/ci";
import { BsFillBasket2Fill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home")
  const {getTotalCartAmount} = useContext(StoreContext)
  const {getTotalQuantity, token, setToken}=useContext(StoreContext)

  const navigate=useNavigate()
  const logOut =()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt="logo" className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")}className={menu=="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu=="menu"?"active":""}>Menu</a>
            <a href='#AppDownload' onClick={()=>setMenu("mobile-app")}className={menu=="mobile-app"?"active":""}>Mobile-App</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu=="contact-us"?"active":""}>Contact Us</a>
        </ul>

        <div className="navbar-right">
          <CiSearch size={30} className='ima' />
          <div className="navbar-search-icon">
          <Link to='/cart'><BsFillBasket2Fill color='#394954' size={25} className='ima'/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}>{/*If cart is empty className will be empty else class name will be dot*/}            
            </div>
          </div>
          {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>:
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
          }
          
        </div>
        
      
    </div>
  )
}

export default Navbar
