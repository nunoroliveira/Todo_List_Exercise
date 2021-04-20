import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Checkbox from './Checkbox';
import {RiChatDeleteLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


function Todo({todo, complete, remove, update, ...otherProps}) {
    const [edit, setEdit] = useState({id: null, value: ''});

    const submitUpdate = value => {
        update(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }


    return (
            <li className={todo.isComplete ? 'todo-row complete' : 'todo-row'} {...otherProps}>
                <div className="todo-text" key={todo.id}>
                    <Checkbox checked={todo.isComplete} onClick={() => complete(todo.id)}/>
                    <p className="text">{todo.text}</p>
                </div>
                <div className="icons">
                    <TiEdit
                        onClick={() => setEdit({id: todo.id, value: todo.text})}
                        className='edit-icon'
                    />
                    <RiChatDeleteLine
                        onClick={() => remove(todo.id)}
                        className='delete-icon'
                    />
                </div>
            </li>
        )
}

export default Todo;
