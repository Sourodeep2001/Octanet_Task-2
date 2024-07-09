import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const newTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(newTasks);
    });

    return () => unsubscribe();
  }, []);

  const addTask = async (task) => {
    await addDoc(collection(db, 'tasks'), task);
  };

  const updateTask = async (id, updatedTask) => {
    await updateDoc(doc(db, 'tasks', id), updatedTask);
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
