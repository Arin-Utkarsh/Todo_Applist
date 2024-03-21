
import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, handleDelete, handleEdit, handleToggleComplete }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className={`singleTodo ${t.completed ? 'completed' : ''}`} key={t.id}>
          <span className="todoText">
            {t.completed ? <del>{t.todo}</del> : t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
          <button onClick={() => handleToggleComplete(t.id)}>{t.completed ? 'Undo' : 'Complete'}</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
