import { type FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } } | null)?.from?.pathname ?? "/admin";

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("email") ?? "").trim();
    login(username);
    navigate(from, { replace: true });
  };

  return (
    <div className="page flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              (document.getElementById("email") as HTMLInputElement).value = "";
              (document.getElementById("password") as HTMLInputElement).value = "";
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
