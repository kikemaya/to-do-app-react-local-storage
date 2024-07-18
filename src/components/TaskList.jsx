import React from "react";
import Task from "./Task";

function TaskList({ tasks, onChangeTasks, showCompleted }) {
	const toggleCompleted = (id) => {
		onChangeTasks(
			tasks.map((task) => {
				if (task.id === id) {
					return {
						...task,
						completed: !task.completed,
					};
				}
				return task;
			}),
		);
	};

	const editTask = (id, newText) => {
		onChangeTasks(
			tasks.map((task) => {
				if (task.id === id) {
					return {
						...task,
						text: newText,
					};
				}
				return task;
			}),
		);
	};

	const deleteTask = (id) => {
		onChangeTasks(
			tasks.filter((task) => {
				if (task.id !== id) {
					return task;
				}
				return 0;
			}),
		);
	};

	return (
		<ul className="task-list">
			{tasks.length > 0 ? (
				tasks.map((task) => {
					if (showCompleted) {
						return (
							<Task
								key={task.id}
								task={task}
								toggleCompleted={toggleCompleted}
								editTask={editTask}
								deleteTask={deleteTask}
							/>
						);
					} else if (!task.completed) {
						return (
							<Task
								key={task.id}
								task={task}
								toggleCompleted={toggleCompleted}
								editTask={editTask}
								deleteTask={deleteTask}
							/>
						);
					}
					return null;
				})
			) : (
				<div className="task-list__message">There's not any task yet...</div>
			)}
		</ul>
	);
}

export default TaskList;
