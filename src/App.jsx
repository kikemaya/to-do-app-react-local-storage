import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import "./components/styles/App.styled.css";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const savedTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  let configShowCompleted = "";

  if (!localStorage.getItem("showCompleted")) {
    configShowCompleted = false;
  } else {
    configShowCompleted = localStorage.getItem("showCompleted") === "true";
  }

  const [tasks, onChangeTasks] = useState(savedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [showCompleted, hiddeCompleted] = useState(configShowCompleted);

  useEffect(() => {
    localStorage.setItem("showCompleted", showCompleted.toString());
  }, [showCompleted]);

  const theme = {
    colors: {
      primary: "#EBFBFF",
    },
    mobile: "768px",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="container">
        <Header showCompleted={showCompleted} hiddeCompleted={hiddeCompleted} />
        <TaskForm tasks={tasks} onChangeTasks={onChangeTasks} />
        <TaskList
          tasks={tasks}
          onChangeTasks={onChangeTasks}
          showCompleted={showCompleted}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
