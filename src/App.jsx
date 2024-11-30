import { useContext, useState } from 'react';
import './index.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123') {
      setUser({ role: 'admin', email });
    } else if (email === 'employee@gmail.com' && password === '123') {
      setUser({ role: 'employee', email });
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

  return (
    <>
      <ToastContainer />
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user && user.role === 'admin' && <AdminDashboard />}
      {user && user.role === 'employee' && <EmployeeDashboard />}
    </>
  );
};

export default App;
