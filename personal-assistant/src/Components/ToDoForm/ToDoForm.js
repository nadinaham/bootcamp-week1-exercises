import React, { useState } from 'react';

const ToDoForm = ({ handleAdd }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput === '') {
            alert("Can't create empty task!")
            return;
        } else {
            handleAdd(userInput);
            setUserInput("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;