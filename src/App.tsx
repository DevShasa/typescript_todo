import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todoArray, setTodoArray] = useState<Todo[]>([])

  // Mark todo as complete
  const completeTodo = (id: number)=>{
    let updatedTodo:Todo[] = todoArray.map(item =>{
      if(item.id === id){
        return {...item,isDone: true}
      }else{
        return item
      }})
    setTodoArray(updatedTodo)
  }

  // Delete a todoitem
  const deleteTodo = (id:number)=>{
    setTodoArray(todoArray.filter(todo=>todo.id !== id))
  }

  // change the text of a todoitem 
  const editTodo = (id:number, text:string) =>{
    let updatedTodo:Todo[] = todoArray.map(item =>{
      if(item.id === id){
        return {...item,todo: text}
      }else{
        return item
      }})
    setTodoArray(updatedTodo)
  }

  const addNewTodo = (e: React.FormEvent )=>{
    e.preventDefault();
    if(todo){
      setTodoArray(
        [ ...todoArray, 
          {
            id: Math.floor((Math.random()*100) + 1),
            todo,
            isDone: false
          },
        ])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className = "heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} addNewTodo={addNewTodo}/>
      <TodoList todoArray={todoArray} setTodoArray={setTodoArray}/>
    </div>
  );
}

export default App;
