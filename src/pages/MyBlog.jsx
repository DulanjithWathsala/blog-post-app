import { useEffect, useState } from "react";
import { fetchPosts, createPost } from "../services/api.js";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost.jsx";

export default function MyBlog() {
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

  const handleCreatePost = async (newPost) => {
    const createdPost = await createPost(newPost);
    console.log(createdPost);

    if (createdPost) {
      setPosts((prevState) => [createdPost, ...prevState]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <CreatePost onCreatePost={handleCreatePost} />

      <hr className="my-5" />

      <h1 className="text-2xl font-bold mb-4 text-center">Blog Posts</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : posts.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-5">
          {posts.map((post) => (
            <div key={post.id} className="rounded p-4 mb-4 bg-white shadow-2xl">
              <h3 className="text-xl mb-2.5">
                <span className="text-green-600">title:</span> {post.title}
              </h3>
              <p>
                <span className="text-green-600">description:</span> {post.body}
              </p>
              <p className="mt-2.5 text-blue-500 hover:text-blue-700 underline">
                <Link to={`/post/${post.id}`}>Read more</Link>
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
