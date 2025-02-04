import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container text-white flex justify-evenly items-center mx-auto">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/about-us" className="hover:text-gray-200">
          My Blog
        </Link>
      </div>
    </nav>
  );
}
