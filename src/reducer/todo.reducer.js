import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../constants/todo.constant"

export const initialTodoState = {
    todos: ['breakfast', 'lunch', 'dinner'],
    editData: {
        index: -1,
        data: ''
    }
}

export const TodoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            let filterTodos = state.todos.filter((todo) => todo !== action.payload)
            return {
                ...state,
                todos: [...filterTodos]

            }
        case EDIT_TODO:
            return {
                ...state,
                editData: {
                    index: action.payload.index,
                    data: action.payload.data
                }
            }
        case UPDATE_TODO:
            state.todos.splice(action.payload.index, 1, action.payload.data)
            return {
                ...state,
                todos: [...state.todos],
                editData: {
                    index: -1,
                    data: ''
                }
            }

        default:
            return state
    }



}