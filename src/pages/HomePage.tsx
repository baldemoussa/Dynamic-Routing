import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="page max-w-2xl mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold">Welcome to the Blog App</h2>
      <p className="text-gray-600 mt-2">
        Browse posts, open a post by its slug, or log in to reach the admin area.
      </p>
      <NavLink
        to="/blog"
        className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        View blog posts
      </NavLink>
    </div>
  );
}

export default HomePage;
