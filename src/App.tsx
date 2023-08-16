import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/Registration";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
