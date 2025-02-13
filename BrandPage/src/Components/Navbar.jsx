import React from 'react'
 import '/Users/vedantbichkunde/Desktop/VS_Code/React Mini-Projects/BrandPage/src/App.css'
const Navbar = () => {
  return (
    <div className='navContainer'>
        <div>
            <img src="/public/images/brand_logo.png" alt="" />
        </div>
        <div>
            <ul className='menuBar'>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div>
            <button id='logInBtn'>LogIn</button>
        </div>
    </div>
  )
}

export default Navbar