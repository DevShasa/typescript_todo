import React from 'react';
import './styles.css';
import { Todo } from '../model';

interface Props{
    todoObj:Todo
}

const TodoCard = ({todoObj}:Props)=>{
    return(
        <div className="todos__single">
            {todoObj.todo}
        </div>
    )
}
export default TodoCard
