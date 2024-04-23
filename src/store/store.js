import { createContext } from "react";
export const initialState={
    todos:[],
    editData:{
        index:-1,
        data:" "
    },
    addTodo:()=>{},
    deleteTodo:()=>{},
    editTodo:()=>{},
    updateTodo:()=>{}

}

 let store= createContext(initialState)
 export default store