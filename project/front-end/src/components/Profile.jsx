import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  User,
  Mail,
  Calendar,
  MapPin,
  Edit2,
  LogOut,
  Loader,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  //TODO: add update profile functionality
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:3000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile data.");
        setLoading(false);
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
        }
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleEditProfile = () => {
    setEditName(user.username);
    setIsEditing(true);
  };

  const handleSaveProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        "http://localhost:3000/api/auth/profile",
        { username: editName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUser((prev) => ({ ...prev, username: editName }));
      // Update local storage if needed
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        storedUser.username = editName;
        localStorage.setItem("user", JSON.stringify(storedUser));
      }
      setIsEditing(false);
    } catch (err) {
      console.error("Failed to update profile", err);
      // Optionally set an error state here specifically for the edit action
      alert("Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader className="h-10 w-10 text-cyan-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Access Error</h2>
          <p className="text-gray-500 mb-6">{error}</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden mb-6 relative">
          <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={handleLogout}
              className="bg-white/20 backdrop-blur-md text-white p-2 rounded-xl hover:bg-white/30 transition-colors flex items-center space-x-2 border border-white/30"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium text-sm hidden sm:inline">
                Logout
              </span>
            </button>
          </div>

          <div className="px-8 pb-8">
            <div className="relative flex justify-between items-end -mt-16 mb-6">
              <div className="flex items-end">
                <div className="h-32 w-32 bg-white rounded-2xl p-2 shadow-lg">
                  <div className="h-full w-full bg-cyan-100 rounded-xl flex items-center justify-center text-4xl font-bold text-cyan-600 uppercase">
                    {user?.username?.charAt(0) || "U"}
                  </div>
                </div>
                <div className="ml-6 mb-2 hidden sm:block">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="text-3xl font-bold text-gray-900 border-b-2 border-cyan-500 focus:outline-none bg-transparent"
                      autoFocus
                    />
                  ) : (
                    <h1 className="text-3xl font-bold text-gray-900">
                      {user?.username}
                    </h1>
                  )}
                  <p className="text-gray-500">Member</p>
                </div>
              </div>

              <div className="flex space-x-2 mb-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSaveProfile}
                      className="bg-cyan-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-cyan-700 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleEditProfile}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2"
                  >
                    <Edit2 className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>
            </div>

            <div className="sm:hidden mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {user?.username}
              </h1>
              <p className="text-gray-500">Member</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Full Name
                    </p>
                    <p className="text-gray-900 font-medium mt-1">
                      {user?.username}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-cyan-100 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Email Address
                    </p>
                    <p className="text-gray-900 font-medium mt-1">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Joined</p>
                    <p className="text-gray-900 font-medium mt-1">
                      December 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Location
                    </p>
                    <p className="text-gray-900 font-medium mt-1">Not Set</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Order History or Activity could go here */}
        {/* <div className="bg-white rounded-3xl shadow-sm p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                    <p className="text-gray-500">No recent activity found.</p>
                </div> */}
      </div>
    </div>
  );
};

export default Profile;
