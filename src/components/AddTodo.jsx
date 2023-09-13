import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!todoTitle) return;
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      isDone: false,
    };
    onAddTodo(newTodo);
    setTodoTitle("");
  }

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <input
        type="text"
        name="add-todo"
        id="add-todo"
        placeholder="Create a new todo..."
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        className="w-full duration-300 rounded-lg shadow-lg py-4 px-8 outline-none focus:outline-2 focus:outline-offset-2 focus:outline-light-grayish-blue placeholder-dark-grayish-blue dark:placeholder:text-light-grayish-blue font-semibold dark:bg-very-dark-grayish-blue dark:text-light-grayish-blue"
      />
    </form>
  );
}

export default AddTodo;
