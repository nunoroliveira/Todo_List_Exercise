import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Checkbox from './Checkbox';
import {RiChatDeleteLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({id: null, value: ''});

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }


    return <ul>{
        todos.map((todo, index) => (
            <li  key={index} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
                <div className="todo-text" key={todo.id}>
                    <Checkbox checked={todo.isComplete} onClick={() => completeTodo(todo.id)}/>
                    <p className="text">{todo.text}</p>
                </div>
                <div className="icons">
                    <TiEdit
                        onClick={() => setEdit({id: todo.id, value: todo.text})}
                        className='edit-icon'
                    />
                    <RiChatDeleteLine
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon'
                    />
                </div>
            </li>
        ))
    }</ul>
}

export default Todo;
