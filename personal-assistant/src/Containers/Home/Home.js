// import libraries
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from "../../data.json";

//components
import ToDoForm from '/Users/nadine/bootcamp-week1-exercises/personal-assistant/src/Components/ToDoForm/ToDoForm.js'
import Clock from '/Users/nadine/bootcamp-week1-exercises/personal-assistant/src/Components/Clock/Clock.js'
import Searchbar from '/Users/nadine/bootcamp-week1-exercises/personal-assistant/src/Components/Searchbar/Searchbar.js'
import ToDoList from '/Users/nadine/bootcamp-week1-exercises/personal-assistant/src/Containers/ToDoList/ToDoList.js'

const Home = () => {
  // set state as todolist data, imported from empty json file which stores all flashcard data (theoretically)
  const [ toDoList, setToDoList ] = useState('');
  const [ searchInput, setInput ] = useState('');

  // SECTION: MODIFYING TASKS SHOWN

  // toggle will cross off done tasks when clicking on done and change complete state to opposite of orig
  const handleToggle = (id) => {
    let checked = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(checked);
  }

  // filter will remove (only show) tasks that aren't crossed off, click clear button
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  // will remove all tasks when clear all button clicked
  const handleClear = () => {
    let filtered = toDoList.filter(task => {
      return !task;
    });
    setToDoList(filtered);
  }

  // SECTION: ADDING/DELETING TASKS

  // will add tasks, triggered by submitting form @ bottom; also task structure is designated here!
  const handleAdd = (userInput) => {
    let add = [...toDoList];
    add = [...add, { id: uuidv4(), task: userInput, complete: false }];
    setToDoList(add);
  }

  // will delete tasks, triggered by clicking delete button
  const handleDelete = (id) => {
    let filtered = toDoList.filter(task => {
      return task.id !== id;
    });
    setToDoList(filtered);
  }

  // SECTION: FILTERING TASKS
  const handleSearch = (query) => {
    // console.log(query)
    setInput(query)
  }

  // return all the components in the app, passing in what functions when needed
  return (
    <div>
      <Clock/>
      <Searchbar handleSearch = {handleSearch}/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} handleDelete = {handleDelete} handleClear = {handleClear} searchInput = {searchInput}/>
      <ToDoForm handleAdd={handleAdd}/>
    </div>
  );
}

export default Home