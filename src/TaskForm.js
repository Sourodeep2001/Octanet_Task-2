import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function TaskForm({ addTask }) {
  const [task, setTask] = useState({ title: '', completed: false });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      addTask(task);
      setTask({ title: '', completed: false });
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Add new task"
      />
      <button className="task-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
