import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [showTodoList, setShowTodoList] = useState(true); // State untuk mengontrol visibilitas

  useEffect(() => {
    return () => {
      alert("Selamat Datang");
    };
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setTotalTasks(totalTasks + 1);
  };

  const completeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setTotalTasks(totalTasks - 1);
    setCompletedTasks(completedTasks + 1);
  };

  const completeAllTasks = () => {
    setTasks([]);
    setCompletedTasks(totalTasks + completedTasks);
    setTotalTasks(0);
    alert("Sampai Jumpa");
    setShowTodoList(false); // Menyembunyikan Todo List
  };

  if (!showTodoList) {
    return null; // Tidak menampilkan apa-apa jika showTodoList adalah false
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const task = e.target.elements.task.value;
          if (task) {
            addTask(task);
            e.target.elements.task.value = "";
          }
        }}
      >
        <input type="text" name="task" placeholder="Enter a new task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => completeTask(index)}>Complete</button>
          </li>
        ))}
      </ul>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed/Removed Tasks: {completedTasks}</p>
      <button onClick={completeAllTasks}>Selesai Semua Tugas</button>
    </div>
  );
};

export default TodoList;
