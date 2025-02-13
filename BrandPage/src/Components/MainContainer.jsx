import React from 'react'
import '/Users/vedantbichkunde/Desktop/VS_Code/React Mini-Projects/BrandPage/src/App.css'
const MainContainer = () => {
  return (
    <div className='mainContainer'>
        <div>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className='btns'>
            <button id='shopNowBtn'>Shop Now</button>
            <button id='categoryBtn'>Category</button>
        </div>
        <p>Also Available on</p>
        <div className="logoBtns">
            <img src="/public/images/flipkart-logo.png" alt="" />
            <img src="/public/images/amazon-logo.png" alt="" />
        </div>
        </div>
        <div>
            <img src="/public/images/shoe-image.png" alt="" style={{marginTop:'100px'}}/>
        </div>
    </div>
  )
}

export default MainContainer