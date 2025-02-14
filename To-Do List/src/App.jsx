import { useState } from 'react';
import './App.css'

function App() 
{
  var [todoList,setTodoList]=useState([]);

  function saveSubmit(event)
  {
    event.preventDefault();
    var newTodo=event.target.todoText.value;
    if(todoList.includes(newTodo)==true)
    {
      alert(`${newTodo} already exists`);
    }
    else
    {
    var newTodoList=[...todoList,newTodo];
    setTodoList(newTodoList);
    console.log(todoList);
    }
    event.target.todoText.value='';
    
  }
  function removeTodo(index)
  {
    todoList.splice(index, 1);
    var newTodo = [...todoList];
    setTodoList(newTodo);
  }
  function toggleCheck(index)
  {
    alert(todoList[index]);
    todoList[index].color='red';
  }
  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <div>
          <form action="" onSubmit={saveSubmit}>
          <input type="text" placeholder='Enter your To-Do :' name='todoText' required/>
          <button id='addBtn'>Add to-do</button>
          </form>
        </div>
        <div className='toDoList'>
         {todoList.map((item,index)=>
         (
          <li>
            <div style={{display:'flex', gap:'5px'}}>
            <button id='checkBtn' onClick={()=>{toggleCheck(index)}}><img src="../Images/radioUncheckedBtn.png" alt="" /></button>
            <p>{index+1} - {item}</p> 
            </div>
            <div>
            <button id='crossBtn' onClick={()=>{removeTodo(index)}}><img src="../Images/cross-icon.webp" alt="" /></button>

            </div>
            </li>
          // <li>{index+1} - {item}</li>
         ))
        }
        </div>
      </div>
    </>
  )
}

export default App
