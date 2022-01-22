import React from 'react'
import { useHistory } from 'react-router-dom'

const Greet = () => {
  const history = useHistory();
  const goTo = (string) => {
    history.push("/".concat(string))
  }
  
  return (
    <div>
      <button onClick={() => goTo("home")}>Todo List</button>
    </div>
  );
}

export default Greet