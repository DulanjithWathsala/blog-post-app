import { useEffect, useState } from "react";
import { fetchPosts } from "../services/api.js";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        isLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Blog Posts</h1>
      <p className="text-center">Welcome to the home page!</p>
      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : posts.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-5">
          {posts.map((post) => (
            <div key={post.id} className="rounded p-4 mb-4 bg-white shadow">
              <h3>
                <span className="text-blue-600">title:</span> {post.title}
              </h3>
              <p>
                <span className="text-blue-600">description:</span> {post.body}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts found!</p>
      )}
    </div>
  );
}

// {posts.length > 0 ? (
//   <div className="mt-6 grid grid-cols-2 gap-5">
//     {posts.map((post) => (
//       <div key={post.id} className="rounded p-4 mb-4 bg-white shadow">
//         <h3>
//           <span className="text-blue-600">title:</span> {post.title}
//         </h3>
//         <p>
//           <span className="text-blue-600">description:</span> {post.body}
//         </p>
//       </div>
//     ))}
//   </div>
// ) : (
//   <p>Loading posts...</p>
// )}
