import React, { useEffect, useRef, useState } from 'react'

function TodoForm({ edit, onSubmit }) {
    const [input, setInput] = useState(edit?.value || '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({
            id: edit?.id || Math.floor(Math.random() * 1000000),
            text: input,
            isComplete: false
        });

        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                className={`input-text todo-input ${edit ? 'edit' : ''}`}
                type="text"
                placeholder={`${edit ? 'Update todo' : 'What needs to be done?'}`}
                value={input}
                name="text"
                onChange={e => { setInput(e.target.value) }}
                ref={inputRef}
            />
        </form>
    )
}

export default TodoForm;
