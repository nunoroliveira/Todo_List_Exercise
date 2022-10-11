import React from 'react';
import TodoList from './Components/TodoList';
import './css/Reset.css'
import './css/Normalize.css'
import './css/App.css';

const App = () => (
    <div className="todo-app">
        <h1 className="h1">todos</h1>
        <TodoList />
    </div>
);
export default App;
