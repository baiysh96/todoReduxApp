import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from "./components/Button";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import {addNewTodo, completeTodo, deleteTodo, fetchTodos} from "./redux/actions";

const App = () => {
    const dispatch = useDispatch()
    const {todos} = useSelector(s => s)
    const [todo, setTodo] = useState({})
    const addItem = () => {
        dispatch(addNewTodo(todo))
        setTodo({
            text: ''
        })
    }
    useEffect(() => {
        dispatch(fetchTodos())
        // dispatch(deleteTodo())
        // dispatch(completeTodo())
    }, [dispatch])

    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const deleteItem = (id) => {
        dispatch(deleteTodo(id))
    }
    const isDoneTodo = (id, todo, completed) => {
        dispatch(completeTodo(id, todo, completed))
    }
    const handlePress = (e) => {
        if (e.code === "Enter" && todo.trim().length) {
            addItem()
        }
    }
    return (
        <div className="container">
            <h2 className="text-center mt-5 text-bg-3"> Todo List with Redux</h2>
            <div className="row">
                <div className="col-6 offset-3 mt-4">
                    <div className="input-group mb-3 pe-1">
                        <Input
                            todo={todo}
                            handlePress={handlePress}
                            handleChange={handleChange}
                        />
                        <Button
                            action={addItem}
                        />
                    </div>
                </div>
                <div className="col-6 offset-3">
                    <TodoItem
                        todos={todos}
                        deleteItem={deleteItem}
                        isDoneTodo={isDoneTodo}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;