import React, { useState } from 'react';
import './index.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, setUser] = useState(null); // State for logged-in user

  const handleLogin = (email, password) => {
    // Simulate login
    if (email === 'admin@gmail.com' && password === '123') {
      setUser({ role: 'admin', email }); // Set admin user
    } else if (email === 'employee@gmail.com' && password === '123') {
      setUser({ role: 'employee', email }); // Set employee user
    } else {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  // Render different dashboards based on the role
  return (
    <>
      <ToastContainer /> {/* Add ToastContainer for notifications */}
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user && user.role === 'admin' && <AdminDashboard />}
      {user && user.role === 'employee' && <EmployeeDashboard />}
    </>
  );
};

export default App;
