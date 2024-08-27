import { useContext, useState } from "react";
import globalContext from "../context/context";

const Todo = ({ todo }) => {
  const { setTodos, todos } = useContext(globalContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  if (isEditing) {
    return (
      <li>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            style={{ marginRight: "0.5rem" }}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button
            style={{ marginRight: "0.5rem" }}
            onClick={() => {
              setIsEditing((prev) => !prev);
            }}
          >
            cancel
          </button>
          <button
            onClick={() => {
              if (!editValue || editValue.length >= 50) {
                alert(
                  "Please enter a valid todo which is atmost 50 characters long"
                );
                return;
              }
              editValue.trim();
              const newTodos = todos.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, text: editValue };
                }
                return t;
              });
              setTodos(newTodos);
              setIsEditing((prev) => !prev);
            }}
          >
            save changes
          </button>
        </div>
      </li>
    );
  }

  return (
    <li>
      <div style={{ display: "flex", alignItems: "center" }}>
        {todo.completed ? (
          <s>
            <p style={{ marginRight: "0.5rem" }}>{todo.text}</p>
          </s>
        ) : (
          <p style={{ marginRight: "0.5rem" }}>{todo.text}</p>
        )}

        <input
          type="checkbox"
          defaultChecked={todo.completed}
          style={{ marginRight: "0.5rem" }}
          onChange={(e) => {
            const newTodos = todos.map((t) => {
              if (t.id === todo.id) {
                return { ...t, completed: e.target.checked };
              }
              return t;
            });
            setTodos(newTodos);
          }}
        />
        <button
          style={{ marginRight: "0.5rem" }}
          onClick={() => {
            setIsEditing((prev) => !prev);
          }}
        >
          edit
        </button>
        <button
          onClick={() => {
            setTodos(todos.filter((t) => t.id !== todo.id));
          }}
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
