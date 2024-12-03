import React from "react";

const Header = ({ data }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between p-6 bg-blue-600 rounded-lg shadow-xl">
      {/* Welcome Section */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-white">
          Hello, Welcome Back!
        </h1>
        <h2 className="text-4xl font-bold text-white mt-2">
          Admin
          <span className="text-blue-300 ml-2">🫡</span>
        </h2>
      </div>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg text-white font-medium px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
