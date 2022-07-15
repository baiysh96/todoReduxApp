import React from 'react';
// import Spinner from "../Spinner";

const TodoItem = ({todos, deleteItem, isDoneTodo}) => {

    return (
        <>
            <ul className="list-group">
                {
                    todos.length ?
                        todos.map((item, index) => (
                            <li key={index}
                                className="pt-1 pb
                                    pe-1 ps-3 list-group-item
                                    d-flex justify-content-between
                                    align-items-center"
                            >
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => isDoneTodo(item.id, item.text, item.completed)}
                                />

                                <span className={item.completed ? "checked" : ""}>{item.text}</span>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => deleteItem(item.id)}
                                >
                                    Delete
                                </button>
                            </li>
                        )) : <div className="text-center">Нет запланированных задач</div>
                }
            </ul>
        </>
    );
};

export default TodoItem;