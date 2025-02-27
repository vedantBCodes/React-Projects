import { useState } from 'react'
import './App.css'
import TransactionForm from './TransactionForm'

function App() 
{
  const [showTForm , setShowTForm] = useState(false);
  const [balance  , setBalance] = useState(0);
  const [expense , setExpense] = useState(0);
  const [income , setIncome] = useState(0);
  const [FormData , setFormdata] = useState({
    amount : "",
    description : "",
    isExpense : false,
    inIncome : false
  })
  function openTForm(event)
  {
    setShowTForm(!showTForm);
    if(event.target.innerText=='Add')
    {
      event.target.innerText='Cancel';
    }
    else
    {
      event.target.innerText='Add';
    }
  }
  return (
    <>
    <main>
   <div className='container'>
    <h1 style={{color:'blue'}}>Expense Tracker </h1>
    <div id='balanceAndBtn'>
      <span>Balance <br /> <span style={{color:'red'}}>${balance}</span></span>
      <button onClick={openTForm}>Add</button>
    </div>
    <div>
    {showTForm==true ? <TransactionForm FormData={FormData} setFormdata={setFormdata}/> : ""}
    </div>
    <div id='expenseAndIncome'>
      <span>Expense <br /><span style={{color:'blue'}}>${expense}</span></span>
      <span>Income <br /><span style={{color:'green'}}>${income}</span></span>
    </div>
    <div id='THistory'>
      <h2>Transactions :</h2>
    </div>
   </div>
   </main>
    </>
  )
}

export default App
