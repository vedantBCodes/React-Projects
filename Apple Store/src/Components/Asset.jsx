import React from 'react'
import './home.css'

const Asset = (props) => {
  return (
   <>
   <div className="container3">
    <img src={props.img} alt="" />
    <p >{props.name}</p>
   </div>
   </>
  )
}

export default Asset