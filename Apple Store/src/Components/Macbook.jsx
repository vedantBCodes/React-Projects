import React from 'react'
import Macproduct from './Macproduct'

const Macbook = () => {
  return (
   <>
   <div className="macContainer1">
    <h1>Choose your new MacBook</h1>
    <p>Forget about marrage , marry with the new MacBook. It's dependable, reliable and you can even go shopping with it.
    </p>
    <hr />
   </div>
   <div className="macContainer2">
    <Macproduct/>
   </div>
   </>
  )
}

export default Macbook