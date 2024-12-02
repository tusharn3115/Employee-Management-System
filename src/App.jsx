import { useContext, useEffect, useState } from 'react';
import './index.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)


  // we are using this to know who is logged in and for example if admin is logged in the admin dashboard will not dissapear as it does when we reload the page, at by doing this it won't dissapear until we click the logout button
  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if (loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
  }, [authData])



  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123') {
      setUser({ role: 'admin', email });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employees.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser({ role: 'employee', email });
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee' }));
      } else {
        console.log("Invalid credentials toast triggered");
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
    } else {
      console.log("Invalid credentials toast triggered");
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
      {user && user.role === 'employee' && <EmployeeDashboard data={loggedInUserData} />}
    </>
  );
};

export default App;
