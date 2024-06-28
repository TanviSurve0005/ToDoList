"use client";

import { useState } from "react";
import TopicsList from "../components/TopicsList";
import CompletedTask from "../components/CompletedTask";

export default function HomePage() {
  const [completedTasks, setCompletedTasks] = useState([]);

  const addCompletedTask = (task) => {
    if (!completedTasks.includes(task)) {
      setCompletedTasks([...completedTasks, task]);
    }
  };

  return (
    <div>
      <TopicsList addCompletedTask={addCompletedTask} />
      <CompletedTask completedTasks={completedTasks} />
    </div>
  );
}
