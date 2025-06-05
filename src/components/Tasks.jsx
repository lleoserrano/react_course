import { ChevronRight, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TaskButton from "./Button";

/**
 * @typedef {Object} Task
 * @property {string | number} id
 * @property {string} title
 * @property {boolean} isCompleted
 */

/**
 * @param {Object} props
 * @param {Task[]} props.tasks
 * @param {(id: string | number) => void} props.onTaskClick
 * @param {(id: string | number) => void} props.onTaskDeleted
 */

export default function Tasks({ tasks, onTaskClick, onTaskDeleted }) {
  const navigate = useNavigate();

  function onTaskDetailClicked(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <TaskButton onClick={() => onTaskDetailClicked(task)}>
            <ChevronRight />
          </TaskButton>

          <TaskButton onClick={() => onTaskDeleted(task.id)}>
            <TrashIcon />
          </TaskButton>
        </li>
      ))}
    </ul>
  );
}
