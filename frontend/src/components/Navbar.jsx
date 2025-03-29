import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo */}
        <Link to="/" className="text-2xl font-bold">
          Home
        </Link>

        {/* Right Side - Buttons */}
        <div>
          <Link to="/login" className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500 mr-2">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
