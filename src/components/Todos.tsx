import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todos";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  let todoData = searchParams.get("todos");

  let filterData = todos;

  if (todoData === "active") {
    filterData = filterData.filter((todo) => !todo.completed);
  }

  if (todoData === "completed") {
    filterData = filterData.filter((todo) => todo.completed);
  }

  return (
    <div>
      <ul>
        {filterData.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
              />
              <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

              {todo.completed && (
                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
