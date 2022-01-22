import React from 'react';
import ToDo from '/Users/nadine/bootcamp-week1-exercises/personal-assistant/src/Components/ToDo/ToDo.js';

const ToDoList = ({toDoList, handleToggle, handleFilter, handleDelete, handleClear, searchInput}) => {
    
    let filteredList = toDoList.filter(entry => {
        return entry.task.toLowerCase().includes(searchInput.toLowerCase())
    })
    
    return (
        <div>
            {filteredList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} handleDelete = {handleDelete}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
            <button style={{margin: '20px'}} onClick={handleClear}>Clear All</button>
        </div>
    );
};

export default ToDoList;