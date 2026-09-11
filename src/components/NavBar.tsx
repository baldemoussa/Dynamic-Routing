import { useNavigate, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const linkActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-blue-500" : "";

  const onLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex justify-center space-x-4 p-4 bg-gray-100">
      <NavLink to="/" className={linkActive}>
        Home
      </NavLink>
      <NavLink to="/blog" className={linkActive}>
        Blogs List
      </NavLink>
      {isAuthenticated ? (
        <>
          <NavLink to="/admin" className={linkActive}>
            Admin
          </NavLink>
          <button type="button" onClick={onLogout}>
            Log Out
          </button>
        </>
      ) : (
        <NavLink to="/login" className={linkActive}>
          Log In
        </NavLink>
      )}
    </nav>
  );
}

export default NavBar;
