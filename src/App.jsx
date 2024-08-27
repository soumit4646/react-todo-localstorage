import { useState } from "react";
import globalContext from "./context/context";
import CreateTodo from "./components/CreateTodo";
import TodosList from "./components/TodosList";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  return (
    <globalContext.Provider value={{ todos, setTodos }}>
      <CreateTodo />
      <TodosList />
    </globalContext.Provider>
  );
};

export default App;
