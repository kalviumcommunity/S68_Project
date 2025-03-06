import React, { useEffect, useState } from 'react';
import TaskCard from './components/TaskCard';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <TaskCard
            key={task._id}
            title={task.title}
            category={task.category}
            priority={task.priority}
            deadline={task.deadline}
            completed={task.completed}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;