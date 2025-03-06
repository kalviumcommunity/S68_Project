import React from 'react';

function TaskCard({ title, category, priority, deadline, completed }) {
  return (
    <li>
      {title} - {category} - {priority} - {deadline} - {completed ? 'Completed' : 'Pending'}
    </li>
  );
}

export default TaskCard;