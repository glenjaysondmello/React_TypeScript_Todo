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
    <div className="bg-gray-800 rounded-xl p-4">
      <ul className="space-y-3">
        {filterData.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
          >
            <div className="flex items-center flex-1 gap-3">
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
                className="w-5 h-5 rounded border-gray-500 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-700"
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className={`flex-1 text-lg ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.task}
              </label>
            </div>
            {todo.completed && (
              <button
                type="button"
                onClick={() => handleDeleteTodo(todo.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
