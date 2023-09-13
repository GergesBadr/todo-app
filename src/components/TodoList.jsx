import TodoItem from "./TodoItem";

function TodoList({ onDeleteTodo, onCompletedTodo, theme, filteredTodoItems }) {
  return (
    <ul className="mt-5 bg-white duration-300 dark:bg-very-dark-grayish-blue shadow-lg rounded-t-lg divide-y divide-very-light-grayish-blue dark:divide-dark-grayish-blue">
      {filteredTodoItems().map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            onDeleteTodo={onDeleteTodo}
            onCompletedTodo={onCompletedTodo}
            theme={theme}
          ></TodoItem>
        );
      })}
    </ul>
  );
}

export default TodoList;
