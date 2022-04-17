import React from "react";
import { Todo } from "../model";

interface contextInterface{
    completeTodo: (id: number) => void;
    add?: (e: React.FormEvent) => void;
    editTodo: (id:number, text:string) => void;
    deleteTodo: (id:number) => void;
    array_of_todos: Todo[];
}

const defaultState = {
    array_of_todos:[],
    deleteTodo:() => {},
    completeTodo:() => {},
    editTodo:() => {}
}

const Context = React.createContext<contextInterface>(defaultState)
export default Context