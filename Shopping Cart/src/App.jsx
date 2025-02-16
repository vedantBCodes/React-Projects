import { useState } from 'react'
import './App.css'
import Card from './Card'
function App() {
  const [cartItemCount,SetCartItemCount] = useState(0);
  return (
    <>
    <div className='cartImage'>
      <h1>List Products</h1> <br /> <br />
      <span>
      <img src="./Images/cartImage.webp" alt="" id='cartImage'/>
      <span id='itemCount'>{cartItemCount}</span>
      </span>
      
      </div>
      <div className='cardContainer'>
      <Card cartItemCount={cartItemCount} SetCartItemCount={SetCartItemCount}/>
      </div>
      <br /> <br />
      
    </>
  )
}

export default App
