import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Post Details</h1>
      <p>You are viewing post with ID: {id}</p>
    </div>
  );
}
