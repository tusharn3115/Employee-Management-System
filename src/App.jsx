import { useContext, useEffect, useState } from "react";
import "./index.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser({ role: userData.role });
      setLoggedInUserData(userData.data || null);
    }
    setLoading(false);
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      const adminUser = { role: "admin" };
      setUser(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        const employeeUser = { role: "employee", data: employee };
        setUser({ role: "employee" });
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
      } else {
        showToast("Invalid Credentials");
      }
    } else {
      showToast("Invalid Credentials");
    }
  };

  const showToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  if (loading) {
    // Optionally show a loading spinner while checking localStorage
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer />
      {!user && <Login handleLogin={handleLogin} />}
      {user?.role === "admin" && <AdminDashboard />}
      {user?.role === "employee" && (
        <EmployeeDashboard data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
