import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signp";
import Dashboard from "./pages/Dashboard";
import MyComplaints from "./pages/MyComplaints";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/complaints"
          element={<MyComplaints />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;