import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./routes/Login/Login";
import Signup from "./routes/Signup/Signup";
import Dashboard from "./routes/Dashboard/Dashboard";
import { AuthProvider } from "./contexts/AuthContext"
import "./styles/index.scss";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;