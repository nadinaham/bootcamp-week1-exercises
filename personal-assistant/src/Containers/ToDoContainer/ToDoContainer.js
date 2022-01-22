import React, { useState } from 'react'
import ToDoList from '../ToDoList/ToDoList'

const TodoContainer = () => {

    // const [search, setSearch] = useState('');

    // insert helper function to change input of Searchbar onchange; called in Searchbar
    // const handleFilter = (query) => {
    //     setSearch({ search: query.target.value })
    //   }

    return (
        // Export function and state accordingly; basically connect Searchbar to TodoList
        <div>
            {/* <Searchbar handleFilter = {handleFilter}/> */}
            <TodoList search = {search}/>
        </div>
    );

}
  
export default TodoContainer;