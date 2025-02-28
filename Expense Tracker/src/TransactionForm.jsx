// import React, { useState } from 'react'
import { useState } from 'react';
import './TransactionForm.css'
const TransactionForm = ({FormData,setFormdata}) => 
{
    // const [Amount , setAmount] = useState(0);
    // const [Description , setDescription] = useState(0);
    // const [selectedOption, setSelectedOption] = useState("");
    // const [isExpense , setIsExpense] = useState("");
    // const [isIncome, setIsIncome] = useState("");
    const [data,setData] = useState({
        Amount : "",
        Description : "",
        incomeOrExpense : ""
    });
    function handleChange(e)
  {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function showData(event)
  {
    event.preventDefault();
    setFormdata([...FormData,data]);
    console.log(data.incomeOrExpense);
    setData({
        Amount : "",
        Description : "",
        incomeOrExpense : ""
    });
    reset();
  }
  function reset()
  {
    let inputs = document.querySelectorAll('input');
    inputs.forEach((input)=>{
        input.value='';
    })
  }
  return (
    <div>
        <form action="" onSubmit={showData}>
            <input type="number"  placeholder='Amount'  name="Amount" onChange={handleChange} required/> <br /> <br />
            <input type="text" placeholder='Description' name="Description" onChange={handleChange} required/> <br /> <br />
            <input type="radio" name='incomeOrExpense' id='expense'  value="expense" onChange={handleChange} required />  &nbsp;
            <label htmlFor="expense">Expense</label> &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" name='incomeOrExpense' id='income' value="income" onChange={handleChange} required />  &nbsp;
            <label htmlFor="income">Income</label> <br /> <br />
            <button >Add Transaction</button>        </form>
    </div>
  )
}

export default TransactionForm