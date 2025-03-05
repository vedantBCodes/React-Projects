import React from 'react'
import Asset from './Asset'
import './home.css'
import { NavLink } from 'react-router-dom'

// import macImage from './Images/HomePageImages/macImage'
import macImage from '/Users/vedantbichkunde/Desktop/VS_Code/React Mini-Projects/Apple Store/src/Images/HomePageImages/macbook-air.png'
import iphoneImage from '/Users/vedantbichkunde/Desktop/VS_Code/React Mini-Projects/Apple Store/src/Images/HomePageImages/iphone.png'
import watchImage from '/Users/vedantbichkunde/Desktop/VS_Code/React Mini-Projects/Apple Store/src/Images/HomePageImages/watch.png'
import ipadImage from '/Users/vedantbichkunde/Desktop/VS_Code/React Mini-Projects/Apple Store/src/Images/HomePageImages/ipad.png'
import macImage2 from '/Users/vedantbichkunde/Desktop/VS_Code/React Mini-Projects/Apple Store/src/Images/HomePageImages/macBookImage2.png'

// import iphoneImage from '../Images/HomePageImages/iPhone'
// import watchImage from '../Images/HomePageImages/Watch'
// import ipadImage from '../Images/HomePageImages/ipad'

const Home = () => {
  return (
    <>
    <div className="container2">
        <h1>Welcome to Apple Store</h1>
        <p>
        Apple's goal isn't to make money. <br />
        Our goal is to design and develop and bring to market good products
        </p>
    </div>
        <hr />
        <div className="homeAsset">
        <li>
            <NavLink to='/macbook'><Asset img={macImage} name="MacBook"/></NavLink>
        </li>
        <li>
            <NavLink to='/iphone'><Asset img={iphoneImage} name="iPhone"/>
            </NavLink>
         </li>
         <li>
            <NavLink to='/watch'><Asset img={watchImage} name="Watch"/>
            </NavLink>
         </li>
         <li>
            <NavLink to='/ipad'><Asset img={ipadImage} name="iPad"/>
            </NavLink>
         </li>
            {/* <Asset img={macImage} name="MacBook"/>
            <Asset img={iphoneImage} name="iPhone"/>
            <Asset img={watchImage} name="Watch"/>
            <Asset img={ipadImage} name="iPad"/> */}
        </div>
    <div className="container4">
        <div>
            <h2>Free delivery on everything</h2>
            <p>and free returns</p>
            <a href="">Know more</a>
        </div>
        <div>
        <h2>Get help buying</h2>
            <p>Call our Business Team on</p>
            <a href="">8530722514</a>
        </div>
    </div>
    <div className="container5">
        <div>
            <img src={macImage2} alt="" />
        </div>
        <div style={{padding:'30px', fontSize:'20px'}}>
        <h1>Accessories</h1>
            <p>designed to enhance driver comfort.</p> 
            <p>Get things done <br /> in style.</p>
            <a href="">Shop Now</a>
        </div>
    </div>
    <hr />
        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
    
    </>
  )
}

export default Home