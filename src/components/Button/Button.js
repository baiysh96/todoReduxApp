import React from 'react';

const Button = ({action}) => {
    return (
        <div>
            <button
                className="btn btn-outline-success"
                type="button"
                onClick={action}
            >
                Add
            </button>
        </div>
    );
};

export default Button;