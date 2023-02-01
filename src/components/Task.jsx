import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faCheckSquare,
  faEdit,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Task({ task, toggleCompleted, editTask, deleteTask }) {
  const [taskToEdit, editingTask] = useState(false);

  const [newTask, onChangeNewTask] = useState(task.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, newTask);
    editingTask(false);
  };

  return (
    <li className="task-list__task">
      <FontAwesomeIcon
        icon={!task.completed ? faSquare : faCheckSquare}
        className="task-list__icon task-list__icon-check"
        onClick={() => toggleCompleted(task.id)}
      />
      <div className="task-list__text">
        {taskToEdit ? (
          <form
            action=""
            className="form-edit-task"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              className="form-edit-task__input"
              value={newTask}
              onChange={(e) => onChangeNewTask(e.target.value)}
            />
            <button type="submit" className="form-edit-task__btn">
              Update
            </button>
          </form>
        ) : (
          task.text
        )}
      </div>
      <div className="task-list__container-buttons">
        <FontAwesomeIcon
          icon={faEdit}
          className="task-list__icon task-list__icon-action"
          onClick={() => editingTask(!taskToEdit)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="task-list__icon task-list__icon-action"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </li>
  );
}

export default Task;
