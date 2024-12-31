import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const todoData = searchParams.get("todos");

  const getLinkClass = (type: string | null) => {
    const baseClass = "px-4 py-2 rounded-lg font-medium transition-colors";
    const isActive = type === todoData || (!type && !todoData);
    return `${baseClass} ${
      isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
    }`;
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8 justify-center">
      <Link to="/" className={getLinkClass(null)}>
        All
      </Link>
      <Link to="/?todos=active" className={getLinkClass("active")}>
        Active
      </Link>
      <Link to="/?todos=completed" className={getLinkClass("completed")}>
        Completed
      </Link>
    </div>
  );
};

export default Navbar;
