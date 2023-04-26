import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false
  });

  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask({
        ...task,
        id: uuid(),
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmmit}>
        <input
          name="title"
          type="text"
          placeholder="task"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="description"
          onChange={handleChange}
        ></textarea>
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default TaskForm;
