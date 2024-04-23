import React, { useContext, useEffect, useState } from 'react'
import store from '../store/store'

export default function Input() {
    let { addTodo, editData, updateTodo} = useContext(store)

    let [todo, setTodo] = useState('')
    const submit = (event) => {
        event.preventDefault()
        if(editData.index === -1){
            addTodo(todo);
        }else{
            updateTodo(editData.index, todo)
        }
        
        setTodo('')

    }



    useEffect(()=>{
        setTodo(editData.data)

    },[editData.index, editData.data])
    
    return (
        <div>
            <form className="row" onSubmit={submit}>
                <div className="col-10">
                    <input type="text"
                        className="form-control"
                        placeholder="Enter Todo"
                        value={todo}
                        onChange={(event)=> setTodo(event.target.value)} />
                </div>
                <div className="col-2">
                    <button type="submit"
                        className="btn btn-primary mb-3"
                        disabled={todo.length === 0 ? true : false
                        }>{ editData.index === -1 ? "Add" : "Update"}</button>
                </div>
            </form>
        </div>
    )
}
