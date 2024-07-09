import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function Task({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            className="edit-input"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <button className="update-button" onClick={handleUpdate}>
            Update
          </button>
        </>
      ) : (
        <>
          <span className="task-title">{task.title}</span>
          <div className="task-actions">
            <button className="mark" onClick={() => updateTask(task.id, { completed: !task.completed })}>
              {task.completed ? 'Unmark' : 'Mark'}
            </button>
            <button className="edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
