import React from 'react'
import './navbar.css'
import appleLogo from '../Images/appleLogo.webp'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
    <div className="container">
        <div className='links'>
        <ul>
        <li>
            <img src={appleLogo} alt="" />
        </li>
        <li>
            <NavLink to='/' style={{color:'blue',textDecoration:"none"}} className="nav-link">Store</NavLink>
        </li>
        <li>
            <NavLink to='/macbook'>MacBook</NavLink>
        </li>
        <li>
            <NavLink to='/watch'>Watch</NavLink>
         </li>
         <li>
            <NavLink to='/iphone'>iPhone</NavLink>
         </li>
         <li>
            <NavLink to='/ipad'>iPad</NavLink>
         </li>
         <li>
            <NavLink to='/accessories'>Accessories</NavLink>
         </li>
         
      </ul>
        </div>
        <div>
            <button>Sign In</button>
        </div>
    </div>
    </>
  )
}

export default NavBar