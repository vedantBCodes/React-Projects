import { useState } from 'react'
import data from './data.js'
import './App.css'

function App() {
  const [index,SetIndex] = useState(0);
  const [count,SetCount] = useState(0);
  const [Question,SetQuestion] = useState(data[index]);
  const [lock,SetLock] = useState(false);
  const [clickedAns,SetClickedAns] = useState('');
  function checkForAnswers(e,ans)
  {
    if(lock==false)
    {
    if(Question.ans==ans)
    {
      // alert('Yess');
      e.target.classList.add("correct");
      SetCount(count+1);
      SetLock(true);
      SetClickedAns(e.target);
    }
    else
    {
      // alert('Noo');
        e.target.classList.add("wrong");
        SetLock(true);
        SetClickedAns(e.target);
    }
  }
  }
  function nextbtn()
  {
    if(clickedAns != "")
    {
    if(clickedAns.classList.contains("correct")==true)
    {
      clickedAns.classList.remove("correct");
    }
    else if(clickedAns.classList.contains("wrong")==true)
    {
      clickedAns.classList.remove("wrong");
    }
    }
    SetLock(false);
    SetQuestion(data[index+1]);
    SetIndex(index+1);
  }
  {
    if(index==5)
    {
      return(
        <div className='success'>
          <h1>You Got {count} out of 5</h1>
        </div>
      )
    }
    
  }
  return (
    <>
      
      <div className="container">
        {
           <div className="quizContainer">
           <h1>{index+1} . {Question.question}</h1>
           <div className='options'>
           <button onClick={(e)=>{checkForAnswers(e,1)}}>{Question.option1}</button>
           <button onClick={(e)=>{checkForAnswers(e,2)}}>{Question.option2}</button>
           <button onClick={(e)=>{checkForAnswers(e,3)}}>{Question.option3}</button>
           <button onClick={(e)=>{checkForAnswers(e,4)}}>{Question.option4}</button>
           </div>
           <button onClick={nextbtn} id='next'>Next</button>
           <p>{index+1} of 5 questions</p>
         </div>
        }
       
      </div>
    </>
  )
}

export default App
