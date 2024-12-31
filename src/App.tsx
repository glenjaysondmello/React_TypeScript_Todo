import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
          TODO LIST
        </h1>
        <Navbar />
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
};

export default App;
