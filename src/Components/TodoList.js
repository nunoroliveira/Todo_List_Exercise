import React, { useCallback, useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import Footer from './Footer'

const isTodoValid = ({ text }) => text && !/^\s*$/.test(text)

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const getFilteredTodos = useCallback((filter) => {
        console.log(todos)
        switch (filter) {
            case 'active':
                return todos.filter(({ isComplete }) => !isComplete);
            case 'completed':
                return todos.filter(({ isComplete }) => isComplete);
            default:
                return todos;
        }
    }, [todos]);
    const filterTodos = (filter = selectedFilter) => {
        setFilteredTodos(getFilteredTodos(filter));
    }

    useEffect(filterTodos, [getFilteredTodos, selectedFilter]);

    const addTodo = todo => {
        if (isTodoValid(todo)) {
            setTodos([todo, ...todos]);
            filterTodos(selectedFilter);
        }
    };

    const updateTodo = (todoId, newValue) => {
        if (isTodoValid(newValue)) {
            setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
            filterTodos(selectedFilter);
        }
    }

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
        filterTodos(selectedFilter);
    }

    const completeTodo = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            })
        );
        filterTodos(selectedFilter);
    };

    return (
        <div className="todo-list">
            <TodoForm onSubmit={addTodo} />
            <ul>
                {
                    filteredTodos.map((todo, index) => <Todo key={index} todo={todo} complete={completeTodo} remove={removeTodo} update={updateTodo} />)
                }
            </ul>
            <Footer
                todos={todos}
                setSelectedFilter={(value) => {
                    setSelectedFilter(value);
                    filterTodos(value);
                }}
                selectedFilter={selectedFilter} />
        </div>
    )
}

export default TodoList;
