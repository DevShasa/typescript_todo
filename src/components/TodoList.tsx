import React from 'react';
import './styles.css';
import { Todo } from '../model';
import TodoCard from './TodoCard';

interface Props{
    todoArray:Todo[],
    setTodoArray:  React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todoArray, setTodoArray }:Props) =>{
    return(
        <div className="todos">
            {todoArray.map(todo=>(
                <TodoCard key={todo.id} todoObj={todo}/>
            ))}
        </div>
    )
}
export default TodoList 