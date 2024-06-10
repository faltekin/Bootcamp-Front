import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

import { useState } from 'react'

import './App.css'

function App() {
  
  const initialData = {
    todo: [
      { text: "Learn React", done: false }, 
      { text: "Have a life !", done: false },
      { text: "evet", done: false },
    ],
  };

  const [todos, setTodos] = useState(initialData.todo);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const countLeft = todos.filter((todo) => !todo.done).length;
  const todoDone = todos.filter((todo) => todo.done).length;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
  });

  const handleToggle = (index) => {
    const newIndex = todos.findIndex((todo) => todo === filteredTodos[index]);

    const updatedTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === newIndex) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section className='todoapp'>
      <header className="header">
        <h1>todos</h1>
        <TodoHead addTodo={addTodo} todos={todos} setTodos={setTodos} />
      </header>

      <section className="main" hidden={todos.length === 0}>
        <TodoList
          todos={todos}
          filter={filter}
          handleToggle={handleToggle}
          setTodos={setTodos}
        />
      </section>

      <TodoFooter
        countLeft={countLeft}
        todoDone={todoDone}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </section>
  )
}

export default App
