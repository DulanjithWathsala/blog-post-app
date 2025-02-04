import { useState } from "react";

export default function CreatePost({ onCreatePost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      title,
      body,
    };

    onCreatePost(newPost);

    setTitle("");
    setBody("");
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <p>This is where you can create a new blog post.</p>
      <div className="mt-5 text-left">
        <form onSubmit={handleFormSubmit}>
          <p className="px-20">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              className="p-2 border rounded w-full mb-6"
              required
            />
          </p>
          <p className="px-20">
            <label htmlFor="body">Description</label>
            <textarea
              name="body"
              id="body"
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
              className="p-2 border rounded w-full mb-4"
              required
            ></textarea>
          </p>
          <p className="px-20 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Create Post
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
