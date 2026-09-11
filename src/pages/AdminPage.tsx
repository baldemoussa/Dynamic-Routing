import useAuth from "../hooks/useAuth";

function AdminPage() {
  const { user } = useAuth();

  return (
    <div className="page max-w-2xl mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold">Welcome to the Admin Dashboard</h2>
      {user && (
        <p className="text-gray-600 mt-2">
          Signed in as <span className="font-semibold">{user.username}</span>
        </p>
      )}
    </div>
  );
}

export default AdminPage;
