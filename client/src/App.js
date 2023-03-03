import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;