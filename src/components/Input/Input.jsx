import React from 'react';

const Input = ({handleChange,todo,handlePress}) => {
    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder="Add a new todo"
                onChange={handleChange}
                value={todo}
                onKeyPress={handlePress}
            />
        </>
    );
};

export default Input;