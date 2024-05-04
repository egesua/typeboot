import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoResult from "./components/TodoResult";
import { ITypes } from "./types/iTypes";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITypes[]>([]);

  const addFunction = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo.length > 0) {
      setTodos((prev) => [
        ...prev,
        { todo: todo, id: todos.length + 1, isColor: false },
      ]);
      setTodo('');
    }
  };

  return (
    <div>
      <TodoInput todo={todo} setTodo={setTodo} addFunction={addFunction} />
      <TodoResult todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
