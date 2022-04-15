import React, {useRef} from 'react';
import './styles.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addNewTodo: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, addNewTodo}:Props) =>{
    const inputRef = useRef<HTMLInputElement>(null)
    return(
        <form className="input" onSubmit={(e) =>{
            addNewTodo(e) //Pass the callback function
            inputRef.current?.blur() // shift focus away from input
        }}>
            <input
                ref = {inputRef} 
                type='input'
                placeholder='Enter a Task'
                className="input__box"
                value = {todo}
                onChange = {(e) => setTodo(e.target.value)}
            />
            <button 
                className="input_submit"
                type ="submit"
            >
                Go
            </button>
        </form>
    )
}
export default InputField 