import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import Footer from './Footer'


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [filterTodos, setFilterTodos] = useState('');

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };


    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }


    const completeTodo = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };


    const getFilteredTodos = () => {
        switch (filterTodos) {
            case 'active':
                return todos.filter(todo => !todo.isComplete);
            case 'completed':
                return todos.filter(todo => todo.isComplete);
            default:
                return todos;
        }
    }


    return (
        <div className="todo-list">
            <TodoForm onSubmit={addTodo}/>

            <Todo todos={getFilteredTodos()} completeTodo={completeTodo} removeTodo={removeTodo}
                  updateTodo={updateTodo}/>

            <Footer todos={todos} filterTodos={filterTodos} setFilterTodos={setFilterTodos}/>
        </div>
    )
}

export default TodoList;
