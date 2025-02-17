import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [cartItemCount,SetCartItemCount] = useState(0);
  return (
    <>
    <div className='cartImage'>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <span>
      <img src="./Images/cartImage.webp" alt="" id='cartImage'/>
      <span id='itemCount'>{cartItemCount}</span>
      </span> 
      </div>
      <h1 id='listProducts'>List Products</h1> 
      <div className='cardContainer'>
      <Card cartItemCount={cartItemCount} SetCartItemCount={SetCartItemCount}/>
      </div>
      
      <br /> <br />
      
    </>
  )
}

export default App
