import React, { useState } from 'react'
import './TransactionForm.css'
const TransactionForm = ({FormData,setFormdata}) => {
    const [Amount , setAmount] = useState(0);
    const [Description , setDescription] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [isExpense , setIsExpense] = useState("");
    const [isIncome, setIsIncome] = useState("");
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
    function handleSubmit(e)
    {
        e.preventDefault();
        setFormdata(() => {
            FormData.Amount=Amount,
            FormData.Description=Description
            if(selectedOption=='expense')
            {
                setIsExpense(true);
                FormData.isExpense=isExpense;
            }
            else
            {
                setIsIncome(true);
                FormData.isIncome=isIncome;
            }
        });
          console.log(FormData);
    }
  return (
    <div>
        <form action="">
            <input type="number"  placeholder='Amount' onChange={(e)=>{setAmount(e.target.value)}}/> <br /> <br />
            <input type="text" placeholder='Description'onChange={(e)=>{setDescription(e.target.value)}}/> <br /> <br />
            <input type="radio" name='radioBtn' id='expense' onChange={handleChange}/>  &nbsp;
            <label htmlFor="expense">Expense</label> &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" name='radioBtn' id='income' onChange={handleChange}/>  &nbsp;
            <label htmlFor="income">Income</label> <br /> <br />
            <button onClick={handleSubmit}>Add Transaction</button>
        </form>
    </div>
  )
}

export default TransactionForm