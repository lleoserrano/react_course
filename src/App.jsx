import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { v4 } from "uuid";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  function onTaskClick(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function onTeskDelete(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function onTaskAdd(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  useEffect(() => {
    /* const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limits=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setTasks(data);
    };

    fetchTasks(); */
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w.screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Task Manager</Title>
        <AddTask onTaskAdd={onTaskAdd} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDeleted={onTeskDelete}
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </div>
  );
}

export default App;
