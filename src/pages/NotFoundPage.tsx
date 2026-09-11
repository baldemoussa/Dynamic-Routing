import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="page max-w-2xl mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold">Page not found</h2>
      <p className="text-gray-600 mt-2">That URL does not match any route.</p>
      <NavLink to="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Go home
      </NavLink>
    </div>
  );
}

export default NotFoundPage;
