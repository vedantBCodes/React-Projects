import './App.css'
import { useRef } from "react";

function App() 
{
const weight = useRef();
const height = useRef();
  function calculate()
  {
    if(weight.current.value=='' || height.current.value=='')
    {
      alert("Details fill kar be");
      return;
    }
    const container=document.querySelector('.container');
    let BMI = weight.current.value/(height.current.value**2);
    let newBMI = BMI.toFixed(2);    
    let result1=document.createElement('span');
    result1.innerText=`Your BMI is ${newBMI} kg/m2 And `;
    result1.style.fontSize='20px';
    container.appendChild(result1);
    let result2=document.createElement('span');
    if(newBMI<18.5)
    {
      result2.innerText=`You are underweight`;
    }
    else if(newBMI>=18.5 && newBMI<=24.9)
    {
      result2.innerText=`You have normal weight`;
    }
    else if(newBMI>=25.0 && newBMI<=29.9)
      {
        result2.innerText=`You have Overweight`;
      }
    else
     {
      result2.innerText=`You have Obese`;
     }
    result2.style.fontSize='20px';
    container.appendChild(result2);
  }
  function clear()
  {
    const container=document.querySelector('.container');
    weight.current.value='';
    height.current.value='';
    container.removeChild(container.lastElementChild); 
  }
  return (
    <>
    <div className="container">
      <h1>BMI CALCULATOR</h1>
     
      <div>
        <label htmlFor="">Weight (in kg)</label> <br />
        <input type="number" placeholder='Enter your weight :' ref={weight} required/> 
      </div>
      <div>
        <label htmlFor="">Height (in m)</label> <br />
        <input type="number" placeholder='Enter your height :' ref={height} required/>
      </div>
      <div className="btns">
      <button id='calculate' onClick={calculate}>Calculate</button>  
      <button onClick={clear}>Clear</button>
      </div>
     
    </div>
    </>
  )
}

export default App
