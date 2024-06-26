import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleToggle, setTodos, filter }) => {
  return (
    <ul className="todo-list">
      {todos
        .filter((todo) => {
          if (filter === "all") return true;
          if (filter === "active") return !todo.done;
          if (filter === "completed") return todo.done;
        })
        .map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleToggle={handleToggle}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
    </ul>
  );
};

export default TodoList;
