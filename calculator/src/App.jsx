import './App.css'
import React, { useRef } from "react";

function App() 
{
  const inputRef = useRef(null);
  function handleClick(e)
  {
    var opr1=['*','/','=','.'];
    var opr2=['*','/','=','.','+','-'];
    let temp = inputRef.current.value;
    var lastChar=temp[temp.length-1];
    console.log(inputRef.current.value.length);
    if((inputRef.current.value.length==0) && (opr1.includes(e.target.innerText)))
    {
      alert("operator is not allowed at 1st position");
    }
    else if((opr2.includes(lastChar)) && (opr2.includes(e.target.innerText)))
    {
      alert("2 consecutive operators are not allowed");
    }
    else if(!((inputRef.current.value.length==0) && (e.target.innerText==0)))
    {
      inputRef.current.value += e.target.innerText;
    }
  }
  function solveExpression()
  {
    var opr=['+','-','*','/','.','%','='];
    let temp = inputRef.current.value;
    var lastChar=temp[temp.length-1];
    if(opr.includes(lastChar))
    {
      alert("operator is not allowed at last position");
      deleteOne();
    }
    else
    {
      inputRef.current.value = eval(inputRef.current.value);
    }
  }
  function allClear()
  {
    inputRef.current.value='';
  }
  function deleteOne()
  {
    inputRef.current.value = inputRef.current.value.slice(0, -1);
  }
  return (
    <>
    <main>
     <div className="container">
      <h2>Do Your Calculations</h2>
      <input type="text" placeholder='Answer' ref={inputRef}  readOnly/>
      <div className="btns">      
      <button onClick={allClear}>AC</button>
      <button onClick={deleteOne}>DEL</button>
      <button onClick={handleClick}>.</button>
      <button onClick={handleClick}>/</button>
      <button className='number' onClick={handleClick}>7</button>
      <button className='number' onClick={handleClick}>8</button>
      <button className='number' onClick={handleClick}>9</button>
      <button onClick={handleClick}>*</button>
      <button className='number' onClick={handleClick}>4</button>
      <button className='number' onClick={handleClick}>5</button>
      <button className='number' onClick={handleClick}>6</button>
      <button onClick={handleClick}>-</button>
      <button className='number' onClick={handleClick}>1</button>
      <button className='number' onClick={handleClick}>2</button>
      <button className='number' onClick={handleClick}>3</button>
      <button onClick={handleClick}>+</button>
      <button className='number' onClick={handleClick}>0</button>
      <button className='number' onClick={handleClick}>00</button>
      <button className='equalToBtn' onClick={solveExpression}>=</button>
      </div>
     </div>
     </main>
    </>
  )
}

export default App
