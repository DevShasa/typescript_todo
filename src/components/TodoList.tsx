import React, {useContext} from 'react';
import './styles.css';
import { Todo } from '../model';
import TodoCard from './TodoCard';
import Context from "../context/Context"; 


interface Props{
    setTodoArray:  React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({setTodoArray }:Props) =>{

    const { array_of_todos } =  useContext(Context)

    return(
        <div className="todos">
            {array_of_todos.map(todo=>(
                <TodoCard key={todo.id} todoObj={todo}/>
            ))}
        </div>
    )
}
export default TodoList 