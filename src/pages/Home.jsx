import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">🚀 Welcome to My Blog!</h1>
        <p className="text-lg mb-4">
          Discover amazing articles, insights, and ideas. Dive into stories that
          inspire and inform.
        </p>
        <Link
          to="/my-blog"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          🏠 Go to Blog
        </Link>
      </div>
    </div>
  );
}
