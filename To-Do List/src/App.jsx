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
          <Todo item={item} index={index} todoList={todoList} setTodoList={setTodoList}/>
         ))
        }
        </div>
      </div>
    </>
  )
}
export default App

function Todo({item,index,todoList,setTodoList})
{
  let [status,checkStatus] = useState(true);
  function removeTodo(index)
  {
    todoList.splice(index, 1);
    var newTodo = [...todoList];
    setTodoList(newTodo);
  }
  return (
    <>
    <li>
        <p id='toDoText' onClick={() => checkStatus(!status)} className={(status==false) ? 'checked' : 'unChecked'}>{index+1} - {item}</p> 
        <button id='crossBtn' onClick={()=>{removeTodo(index)}}><img src="../Images/cross-icon.webp" alt="" /></button>
    </li>
    </>
  )
}