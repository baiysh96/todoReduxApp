import {ADD_TODO, COMPLETE_ITEM, GET_TODO_ITEMS, REMOVE_FROM_TODO} from "./actionTypes";
import {BASE_URL} from "./urls";
import axios from "axios";


export const addNewTodo = (todo) => {
    return (dispatch) => {
        axios.post(BASE_URL, {
            text: todo,
            completed: false,
        }).then(res => dispatch({
            type: ADD_TODO,
            payload: res.data
        }))
    }
}

export const fetchTodos = () => {
    return async (dispatch) => {
        const {data} = await axios.get(BASE_URL)
        dispatch({
            type: GET_TODO_ITEMS,
            payload: data
        })
    }
}


export const deleteTodo = (id) => {
    return (dispatch, getState) => {
        const filteredTodo =  getState().todos.filter(item => item.id !== id)
        axios.delete(`https://62cefb25826a88972d07096e.mockapi.io/todos/${id}`)
        .then(() => dispatch({
            type: REMOVE_FROM_TODO,
            payload: filteredTodo
        }))
    }
}

export const completeTodo = (id, todo, completed) => {
    return (dispatch, getState) => {
        const updatedTodos = getState().todos.map((item) => {
            if (item.id === id) {
                return {...item, completed: !item.completed}
            }
            return item
        })
         axios.put(`https://62cefb25826a88972d07096e.mockapi.io/todos/${id}`, {completed: !completed})
             .then(() => {
                 dispatch({
                     type: COMPLETE_ITEM,
                     payload: updatedTodos
                 })
             })
    }
}