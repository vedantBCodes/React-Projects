import React, { useState } from 'react'
import './App.css'
const CartItems = ({index, shoppingCart,cardItemIndex,setCardItemIndex}) =>
{
    const [count,SetCount]=useState(1);
    function decrement(index)
    {
        SetCount(count-1);
        if(count==1)
        {
            cardItemIndex.splice(index, 1);
            setCardItemIndex([...cardItemIndex]);
            // alert('item removed');
        }
    }
    function increment()
    {
        SetCount(count+1);
    }
  return (
    <div>
        <div className='card'>
        <div>
            <img src={shoppingCart[index].Image} alt="" />
        </div>
        <div>
            <p style={{fontSize:'20px'}}>{shoppingCart[index].Description}</p>
        </div>
        <div>
        <span style={{fontSize:'20px'}}>${shoppingCart[index].Prize*count}</span>
        </div>
        <div id='plusMinusBtns'>
            <span><button onClick={()=>decrement(index)}>-</button></span>
            <span style={{fontSize:'25px'}}>{count}</span>
            <span><button onClick={increment}>+</button></span>
        </div>
    </div>
    </div>
  )
}

export default CartItems