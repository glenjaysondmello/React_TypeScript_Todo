import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <h1>REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
