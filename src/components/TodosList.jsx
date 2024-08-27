import { useContext } from "react";
import globalContext from "../context/context";
import Todo from "./Todo";

const TodosList = () => {
  const { todos } = useContext(globalContext);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
