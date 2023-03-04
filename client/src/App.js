import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;