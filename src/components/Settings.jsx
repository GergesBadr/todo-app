import { useState } from "react";

function Settings({ todo, setTodo, setFilter, activeTodo, completedTodo }) {
  const [currSelected, setCurrSelected] = useState("all");

  function handleFiltered(val) {
    setFilter(val);
    setCurrSelected(val);
  }

  return (
    <div className="rounded-b-lg shadow-lg duration-300 bg-white dark:bg-very-dark-grayish-blue text-dark-grayish-blue flex items-center justify-between p-4 border-t border-t-very-light-grayish-blue dark:border-t-dark-grayish-blue">
      <span>
        {todo.length <= 0
          ? "No items"
          : todo.length === 1
          ? `${activeTodo.length} Item left`
          : `${activeTodo.length} Items left`}
      </span>
      <div className="flex items-center md:gap-4 absolute md:relative duration-300 -bottom-20 md:bottom-0 left-0 bg-white dark:bg-very-dark-grayish-blue w-full md:w-auto py-4 md:p-0 rounded-lg md:shadow-none shadow-lg justify-center gap-8">
        <button
          onClick={() => handleFiltered("all")}
          className={`filter-btn ${
            currSelected === "all" ? "selected-filter-btn" : ""
          }`}
        >
          All
        </button>
        <button
          disabled={activeTodo.length === 0}
          onClick={() => handleFiltered("active")}
          className={`filter-btn ${
            currSelected === "active" ? "selected-filter-btn" : ""
          }`}
        >
          Active
        </button>
        <button
          disabled={completedTodo.length === 0}
          onClick={() => handleFiltered("completed")}
          className={`filter-btn ${
            currSelected === "completed" ? "selected-filter-btn" : ""
          }`}
        >
          Completed
        </button>
      </div>
      <button
        onClick={() => setTodo(activeTodo)}
        className="duration-300 hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default Settings;
