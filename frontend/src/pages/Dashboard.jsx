import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Auth Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold">
            Welcome Back 👋
          </h2>

          <p className="mt-2 text-lg">
            {user?.username || "User"}
          </p>

          <p className="text-sm opacity-80">
            {user?.email}
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500 text-sm">
              Account Status
            </h3>
            <p className="text-2xl font-bold text-green-600 mt-2">
              Active
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500 text-sm">
              Authentication
            </h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              JWT Enabled
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500 text-sm">
              Login Method
            </h3>
            <p className="text-2xl font-bold text-purple-600 mt-2">
              Email / Google
            </p>
          </div>
        </div>

        {/* User Profile */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">
            Profile Information
          </h3>

          <div className="space-y-4">
            <div>
              <span className="font-semibold">
                Username:
              </span>{" "}
              {user?.username}
            </div>

            <div>
              <span className="font-semibold">
                Email:
              </span>{" "}
              {user?.email}
            </div>

            <div>
              <span className="font-semibold">
                User ID:
              </span>{" "}
              {user?.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}