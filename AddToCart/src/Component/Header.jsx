import '../App.css'
import { NavLink } from 'react-router-dom'

const Header = ({cartAllProduct}) => {
   
  return (
    <div>
        <ul>
            <div id='links'>
            <NavLink to="/" ><li>HOME</li></NavLink>
            <NavLink><li>ABOUT</li></NavLink>
            <NavLink><li>CONTACT</li></NavLink>
            </div>
            <div>
            <NavLink to="/cart">
             <li style={{color:'white'}} >
               <i className="fa-solid fa-cart-shopping fs-3 "></i>
               <span id='cartItemCount'>{cartAllProduct.length}</span>
               </li>
            </NavLink>
            </div>
        </ul>
    </div>
  )
}

export default Header