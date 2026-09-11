import { useNavigate, useParams } from "react-router-dom";
import { blogPosts } from "../data/posts";

function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="page max-w-2xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <p className="text-gray-600 mt-2">
          No post matches the slug &quot;{slug}&quot;.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
          onClick={() => navigate("/blog")}
        >
          Back to posts
        </button>
      </div>
    );
  }

  return (
    <div className="page max-w-2xl mx-auto p-4 mb-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center p-4">{post.title}</h2>

      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-md"
      />

      <p className="text-gray-600 mt-2">{post.content}</p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}

export default BlogPage;