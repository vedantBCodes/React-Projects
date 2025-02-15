import React, { useState } from 'react'
import './App.css'

const Card = () => {
  const [cardItemIndex,setCardItemIndex] = useState([]);
  const shoppingCart=[
    {
      "ID":"1",
      "Image":"./Images/office-chair.webp",
      "Description":"Orem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolore.",
      "Prize":"$201"
  },
  {
    "ID":"2",
    "Image":"./Images/office-chair2.webp",
    "Description":"consectetur adipisicing elit. Quidem, dolore Orem ipsum dolor sit amet .",
    "Prize":"$501"
  },
  {
    "ID":"3",
    "Image":"./Images/office-chair3.webp",
    "Description":"consectetur adipisicing elit. Quidem, dolore Orem ipsum dolor sit amet .",
    "Prize":"$701"
  },
  {
    "ID":"4",
    "Image":"./Images/office-chair4.webp",
    "Description":"consectetur adipisicing elit. Quidem, dolore Orem ipsum dolor sit amet .",
    "Prize":"$901"
  }
]
function handleCartItems(index)
{
  setCardItemIndex([...cardItemIndex,index]);
  var arr=[...cardItemIndex];
  console.log(arr);
}
  return (
    <>
    {shoppingCart.map((item,index)=>
    (
      <div className='card'>
        <div>
            <img src={item.Image} alt="" />
        </div>
        <div>
            <p style={{fontSize:'20px'}}>{item.Description}</p>
        </div>
        <div id='priceAndCartBtn'>
            <span style={{fontSize:'20px'}}>{item.Prize}</span>
            <span><button onClick={()=>handleCartItems(index)}>Add To Cart</button></span>
        </div>
    </div>
    ))}
    <h1>Cart Items</h1>
    {cardItemIndex}
    </>
  )
}


export default Card