import React, {useContext} from 'react';
import './styles.css';
import { Todo } from '../model';
import Context from "../context/Context";
import { AiFillDelete } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';


interface Props{
    todoObj:Todo
}

const TodoCard = ({todoObj}:Props)=>{

    const { deleteTodo, completeTodo } =  useContext(Context)

    return(
        <div className="todos__single">

            {todoObj.isDone &&(
                    <span 
                        style={{color:"green"}}
                        className="todos__single__isDone"
                    >
                        <BsCheckCircle/>
                    </span>
            )}

            {!todoObj.isDone &&(
                    <span 
                        style={{color:"red"}}
                        className="todos__single__isDone"
                    >
                        <BsCheckCircle/>
                    </span>
            )}                 
            <span>
                {todoObj.todo}
            </span>

            {!todoObj.isDone &&(
                <>
                    <span 
                        className="todos__single__complete"
                        style={{
                            border: "2px solid red",
                            cursor:"pointer"
                        }}
                        onClick = {() =>completeTodo(todoObj.id)}
                    >
                        Not complete 
                    </span>
                </>
            )}

            {todoObj.isDone &&(
                <>
                    <span 
                        className="todos__single__complete"
                        style={{
                            border: "2px solid green"
                        }}
                    >
                        Task complete 
                    </span>
                </>
            )}      

            <span className="todos__single__delete"
                onClick={()=> deleteTodo(todoObj.id)}
            >
                <AiFillDelete />
            </span>
        </div>
    )
}
export default TodoCard
