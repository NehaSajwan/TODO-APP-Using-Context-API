import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../constants/todo.constant";


 export const addTodoAction = (value) => {
    return {
        type: ADD_TODO,
        payload: value
    }
}

export const editTodoAction = (index, data) => {
    return {
        type: EDIT_TODO,
        payload: {
            index,
            data
        }
    }
}

export const deleteTodoAction = (value) => {
    return {
        type: DELETE_TODO,
        payload: value
    }
}

export const updateTodoAction = (index, data) => {
    return {
        type: UPDATE_TODO,
        payload: {
            index,
            data
        }
    }
}