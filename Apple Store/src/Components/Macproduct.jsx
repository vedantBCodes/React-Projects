import React from 'react'
import './macbook.css'
const Macproduct = () => {
  return (
    <>
    <div className="macProductContainer">
        <div className='c1'>
            <img src="https://vedantbcodes.github.io/Apple-Store/Images/macbook-air-m1.png" alt="" />
            <br />
            <h1>MacBook Air with m1 chip</h1>
            <p>From $1299</p>
            <div>
                <span><button>Add To Cart</button></span> &nbsp;
                <span><button>Buy Now</button></span>
                
            </div>
        </div>
        <div className='c2'>
            <img src="https://vedantbcodes.github.io/Apple-Store/Images/m1-logo.png" alt="" />
            <h1>8-Core CPU <br />
                  7-Core GPU <br />
                8GB Unified Memory <br />
                256GB SSD Storage footnote</h1>
                <p>
                Force Touch trackpad <br />
                16-core Neural Engine <br />
                30W USB-C Power Adapter <br />
                Two Thunderbolt / USB 4 ports <br />
                Magic Keyboard with Touch ID <br />
                13-inch Retina display with True Tone
                </p> 
                <a href="">Read More</a>
        </div>
    </div>
    </>
  )
}

export default Macproduct