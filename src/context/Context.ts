import React from "react";
import { Todo } from "../model";

interface contextInterface{
    completeTodo: (id: number) => void;
    add?: (e: React.FormEvent) => void;
    edit?: (id:number, text:string) => void;
    deleteTodo: (id:number) => void;
    array_of_todos: Todo[];
}

const defaultState = {
    array_of_todos:[],
    deleteTodo:() => {},
    completeTodo:() => {},
}

const Context = React.createContext<contextInterface>(defaultState)
export default Context