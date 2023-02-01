import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function TaskForm({ tasks, onChangeTasks }) {
  const [inputTask, onChangeInputTask] = useState("");

  const handleInput = (e) => {
    onChangeInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTask === "") {
      return alert("Write a task before send, please");
    } else {
      onChangeTasks([
        ...tasks,
        {
          id: uuidv4(),
          text: inputTask,
          completed: false,
        },
      ]);
      onChangeInputTask("");
    }
  };

  return (
    <form action="" className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form__input"
        placeholder="Write a task"
        value={inputTask}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="task-form__btn">
        <FontAwesomeIcon icon={faPlusSquare} className="task-form__icon-btn" />
      </button>
    </form>
  );
}

export default TaskForm;
