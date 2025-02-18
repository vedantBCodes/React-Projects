import React from 'react'
import '../App.css'
import toast, { Toaster } from "react-hot-toast";
import productList from './data.js'

const Home = ({ SetCartItemId}) => {
    function addToCart(id)
    {
        SetCartItemId(id);
        toast.success("Product Added Successfully !");
    }
  return (
    <div className='productContainer'>
         <Toaster />
        {productList.map((product,index)=>
        {
            return(
            <div className="container" key={index}>
            <div>
            <img src={product.img} alt="" />
            </div>
            <div className='brandAndItem'>
                <span>{product.brand}</span>
                <span>{product.model}</span>
            </div>
            <div>
                <span id='prize' >₹ {product.price}</span>
            </div>
            <div style={{fontSize:'17px'}}>
                <p>{product.space}</p>
            </div>
            <div>
                <button onClick={()=>addToCart(product.id)}>AddToCart</button>
            </div>
         </div>
            )
        }
      )}
        
    </div>
  )
}

export default Home