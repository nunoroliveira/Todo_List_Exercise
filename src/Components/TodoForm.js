import React, {useEffect, useRef, useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000000),
            text: input,
            isComplete: false
        });

        setInput('');
    };


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <input
                    className="input-text todo-input edit"
                    type="text"
                    placeholder="Update todo"
                    value={input}
                    name="text"
                    onChange={handleChange}
                    ref={inputRef}
                />
            ) : (
                <input
                    className="input-text todo-input"
                    type="text"
                    placeholder="What needs to be done?"
                    value={input}
                    name="text"
                    onChange={handleChange}
                    ref={inputRef}
                />
            )}
        </form>
    )
}

export default TodoForm;
