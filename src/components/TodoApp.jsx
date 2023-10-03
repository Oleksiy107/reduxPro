import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateText1,
  updateText2,
  clearText1,
  clearText2,
} from "./Reducers";

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");

  const handleAddTodo = () => {
    if (inputText1.trim() !== "" && inputText2.trim() !== "") {
      dispatch(
        addTodo({
          text1: inputText1,
          text2: inputText2,
          checked: false,
          id: Date.now(),
        })
      );
      setInputText1("");
      setInputText2("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleText1Update = (id, newText1) => {
    dispatch(updateText1({ id, newText1 }));
  };

  const handleText2Update = (id, newText2) => {
    dispatch(updateText2({ id, newText2 }));
  };

  const handleText1Clear = (id) => {
    dispatch(clearText1({ id }));
  };

  const handleText2Clear = (id) => {
    dispatch(clearText2({ id }));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add a name"
          value={inputText1}
          onKeyPress={(e) => validateString(e)}
          onChange={(e) => setInputText1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Add a number"
          value={inputText2}
          min={0}
          onKeyPress={(e) => validateNumber(e)}
          onChange={(e) => setInputText2(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.text1}
              onKeyPress={(e) => validateString(e)}
              onChange={(e) => handleText1Update(todo.id, e.target.value)}
            />
            <input
              type="text"
              value={todo.text2}
              onKeyPress={(e) => validateNumber(e)}
              onChange={(e) => handleText2Update(todo.id, e.target.value)}
            />
            <div>
              <button onClick={() => handleText1Clear(todo.id)}>
                Clear Name
              </button>
              <button onClick={() => handleText2Clear(todo.id)}>
                Clear Number
              </button>
            </div>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <span className={todo.checked ? "completed" : ""}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
