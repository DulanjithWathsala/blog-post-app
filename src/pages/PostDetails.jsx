import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../services/api.js";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const getPost = async () => {
        const response = await fetchPostById(id);
        console.log(response);

        setPost(response);
      };

      getPost();
    } catch (error) {
      console.error(error);
      setError("Failed to fetch data. Try again!");
    } finally {
      setLoading(false);
    }
  }, [id]);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Post Details</h1>
      <p>You are viewing post with ID: {id}</p>
      {loading ? (
        <p>post loading...</p>
      ) : error ? (
        <p className="text-red-500">Failed to fetch post</p>
      ) : post ? (
        <div className="mb-5 shadow rounded-2xl mx-52 mt-10 p-5">
          <h1 className="text-green-600 text-2xl mb-5">{post.title}</h1>
          <p className="text-fuchsia-950">{post.body}</p>
        </div>
      ) : (
        <p>No post found!</p>
      )}
    </div>
  );
}
