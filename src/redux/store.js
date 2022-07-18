import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import {ADD_TODO, COMPLETE_ITEM, GET_TODO_ITEMS, REMOVE_FROM_TODO} from "./actionTypes";
import thunk from 'redux-thunk'

const initialState = {
    todos: []
}
const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_ITEMS:
            return {...state,todos: action.payload}
        case ADD_TODO:
            return {...state,todos: [...state.todos,action.payload]}
        case REMOVE_FROM_TODO:
            return {...state, todos: action.payload}
        case COMPLETE_ITEM:
            return {...state, todos: action.payload}
        default :
            return state
    }
}
export const store = createStore(storeReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
)