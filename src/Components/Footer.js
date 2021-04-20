import React from 'react';

const Footer = ({ todos, selectedFilter, setSelectedFilter }) => {
    const allCompletedTodos = todos.filter(todo => !todo.isComplete).length;

    const createFilterButton = (name, value) => (
        <button
            className={`${name.toLowerCase()} ${selectedFilter === value ? "isActive" : ""}`}
            onClick={() => {
                setSelectedFilter(value);    
                }
            }>
                {name}
        </button>
    );

    return (
        <div className="footer">
            <p className="item-count">{allCompletedTodos} items left</p>
            <div className="buttons">
                {createFilterButton('All', '')}
                {createFilterButton('Active', 'active')}
                {createFilterButton('Completed', 'completed')}
            </div>
            <div className="item-count" />
        </div>
    );
};

export default Footer;