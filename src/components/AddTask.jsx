import { useState } from "react";
import { toast } from "react-toastify";
import Input from "./Input";

export default function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md flex flex-col">
      <Input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            toast.error("🚨 Please fill in both fields!");
            return;
          }
          onTaskAdd(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white p-2 rounded-md font-medium"
      >
        Add Task
      </button>
    </div>
  );
}
