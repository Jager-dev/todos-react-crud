import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from 'nanoid'
import TodoItem from "../TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([
    {id: 1, title: "Eat breakfast"},
    {id: 2, title: "Go to work"}
  ])
  const [value, setValue] = useState("")

  const handleInput = (e) => {
    setValue(e.target.value)
  }
  const addTodo = () => {
    const newTodo = {
      id: nanoid(),
      title: value,
      createAT: +new Date()
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  return (
    <div className={"row my-5"}>
     <div className="col-md-4 offset-md-4">
       <div className={"d-flex mb-4"}>
         <input type="text" className={"form-control me-2"} value={value} onChange={handleInput}/>
         <button className={"btn btn-primary"} onClick={addTodo} disabled={!value.trim()}>Add</button>
       </div>
       <ul className={"list-group"}>
         {
           todos.map(item =>
              <TodoItem item={item} deleteTodo={deleteTodo}/>
           )
         }
       </ul>
     </div>
    </div>
  );
};

export default Todo;