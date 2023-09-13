function TodoItem({ item, onDeleteTodo, onCompletedTodo, theme }) {
  return (
    <li className="px-6 py-4 flex items-center justify-between">
      <button
        role="checkbox"
        aria-label="mark todo as completed"
        aria-checked={item.isDone ? true : false}
        onClick={() => onCompletedTodo(item.id)}
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          !item.isDone
            ? "border bg-transparent border-dark-grayish-blue"
            : "bg-gradient-to-br from-[#57ddff] to-[#c058f3]"
        }`}
      >
        {item.isDone && (
          <img
            src="assets/images/icon-check.svg"
            alt="check mark"
            aria-hidden={true}
          />
        )}
      </button>
      <p
        className={`flex-1 ml-4 duration-300  ${
          item.isDone
            ? "line-through text-dark-grayish-blue"
            : "text-very-dark-grayish-blue dark:text-light-grayish-blue font-semibold"
        }`}
      >
        {item.title}
      </p>
      <button onClick={() => onDeleteTodo(item.id)}>
        {theme === "dark" ? (
          <img src="assets/images/icon-cross-dark.svg" alt="delete todo" />
        ) : (
          <img src="assets/images/icon-cross-light.svg" alt="delete todo" />
        )}
      </button>
    </li>
  );
}

export default TodoItem;
