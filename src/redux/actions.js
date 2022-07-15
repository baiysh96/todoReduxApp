import {nanoid} from "nanoid";
import {ADD_TODO, COMPLETE_ITEM, GET_TODO_ITEMS, REMOVE_FROM_TODO} from "./actionTypes";
import {BASE_URL} from "./urls";
import axios from "axios";

export const fetchTodos = () => {
    return (dispatch) => {
        axios.get(BASE_URL)
            .then((res) => dispatch({
                type: GET_TODO_ITEMS,
                payload: res.data
            }))
    }
}

export const addNewTodo = (todo) => {
    return (dispatch, getState) => {
        axios.post(BASE_URL, {
            text: todo,
            completed: false
        })
        return dispatch({
            type: ADD_TODO,
            payload: [...getState().todos, {
                id: nanoid(),
                text: todo,
                completed: false
            }]
        })
    }
}

export const deleteTodo = (id) => {
    return (dispatch, getState) => {
        axios.delete(`https://62cefb25826a88972d07096e.mockapi.io/todos/${id}`)
        return dispatch({
            type: REMOVE_FROM_TODO,
            payload: getState().todos.filter(item => item.id !== id)
        })
    }
}

export const completeTodo = (id, todo, completed) => {
    return async (dispatch, getState) => {
        await axios.put(`https://62cefb25826a88972d07096e.mockapi.io/todos/${id}`, {
            completed: !completed
        })
        return dispatch({
            type: COMPLETE_ITEM,
            payload: getState().todos.map((item) => {
                if (item.id === id) {
                    return {...item, completed: !item.completed}
                }
                return item
            })
        })
    }
}