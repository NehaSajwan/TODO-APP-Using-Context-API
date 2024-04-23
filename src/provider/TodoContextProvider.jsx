import React, { useReducer, useState } from 'react'
import store from '../store/store'
import { initialState } from '../store/store'
import { TodoReducer, initialTodoState } from '../reducer/todo.reducer'
import { addTodoAction, deleteTodoAction, editTodoAction, updateTodoAction } from '../actions/todo.action'

export default function TodoContextProvider({ children }) {
    const [todoState, dispatch] = useReducer(TodoReducer, initialTodoState)

    const addTodo = (value) => {
        dispatch(addTodoAction(value))
    }
    const deleteTodo = (value) => {
        dispatch(deleteTodoAction(value))

    }
    const editTodo = (index, data) => {
        dispatch(editTodoAction(index, data))

    }

    const updateTodo = (index, data) => {
     dispatch(updateTodoAction (index, data))
    }
    return (
        <store.Provider value={{
            ...initialState,
            todos: todoState.todos,
            addTodo,
            deleteTodo,
            editData: todoState.editData,
            editTodo,
            updateTodo
        }}>
            {
                children
            }

        </store.Provider>

    )
}
