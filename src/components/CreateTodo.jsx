import { useContext, useState } from "react";
import globalContext from "../context/context";
import {v4 as uuidv4} from "uuid";

const CreateTodo = () => {
  const [value, setValue] = useState("");
  const { todos, setTodos } = useContext(globalContext);
  console.log(todos);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!value || value.length >= 50) {
            alert(
              "Please enter a valid todo which is atmost 50 characters long"
            );
            return;
          }
          value.trim();
          const newTodo = {
            id: uuidv4(),
            text: value,
            completed: false,
          };

          console.log(newTodo);
          

          setTodos([...todos, newTodo]);
          setValue("");
        }}
      >
        <input
          type="text"
          placeholder="Enter todo here"
          value={value}
          style={{ marginRight: "0.5rem" }}
          onChange={(e) => setValue(e.target.value)}
        />
        <button style={{ marginRight: "0.5rem" }}>add</button>
      </form>
      <button
        style={{ marginRight: "0.5rem" }}
        onClick={() => {
          localStorage.setItem("todos", JSON.stringify(todos));
        }}
      >
        save to local storage
      </button>
      <button
        onClick={() => {
          localStorage.clear();
          setTodos([]);
        }}
      >
        clear local storage
      </button>
    </div>
  );
};

export default CreateTodo;
