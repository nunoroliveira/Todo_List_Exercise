import React from 'react';

const Footer = ({todos, filterTodos, setFilterTodos}) => {
    const allCompletedTodos = todos.filter(todo => !todo.isComplete).length;

    return (
        <div className="footer">
            <p className="item-count">{allCompletedTodos} items left</p>
            <div className="buttons">
                <button className={filterTodos === '' ? "all isActive" : "all"}
                        onClick={() => setFilterTodos('')}>All
                </button>
                <button className={filterTodos === 'active' ? "active isActive" : "active"}
                        onClick={() => setFilterTodos('active')}>Active
                </button>
                <button className={filterTodos === 'completed' ? "completed isActive" : "completed"}
                        onClick={() => setFilterTodos('completed')}>Completed
                </button>
            </div>
            <div className="item-count"/>
        </div>
    );
};

export default Footer;