import { useState, useEffect } from "react";
import Background from "./components/Background";
import Main from "./components/Main";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Settings from "./components/Settings";
import useLocalStorage from "./hooks/useLocalStorage";
import EmptyList from "./components/EmptyList";

export default function App() {
  const [todo, setTodo] = useLocalStorage("todoItems", []);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useLocalStorage("current-theme", null);
  const activeTodo = todo.filter((item) => !item.isDone);
  const completedTodo = todo.filter((item) => item.isDone);

  function handleAddTodo(newTodo) {
    setTodo((items) => [newTodo, ...items]);
  }

  function handleDeleteTodo(id) {
    setTodo((items) => items.filter((item) => item.id !== id));
  }

  function handleCompletedTodo(id) {
    setTodo((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  function filteredTodoItems() {
    if (filter === "all") {
      return todo;
    } else if (filter === "active") {
      return activeTodo;
    } else if (filter === "completed") {
      return completedTodo;
    }
    return todo;
  }

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  // Display user prefer theme
  useEffect(() => {
    if (!theme) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  // add dark theme class to be handled with tailwind
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <>
      <Background></Background>
      <Main>
        <Header theme={theme} onThemeSwitch={handleThemeSwitch}></Header>
        <AddTodo onAddTodo={handleAddTodo}></AddTodo>
        {todo.length <= 0 ? (
          <EmptyList></EmptyList>
        ) : (
          <TodoList
            onDeleteTodo={handleDeleteTodo}
            onCompletedTodo={handleCompletedTodo}
            filteredTodoItems={filteredTodoItems}
            theme={theme}
          ></TodoList>
        )}
        <Settings
          todo={todo}
          setTodo={setTodo}
          setFilter={setFilter}
          activeTodo={activeTodo}
          completedTodo={completedTodo}
        ></Settings>
      </Main>
    </>
  );
}
