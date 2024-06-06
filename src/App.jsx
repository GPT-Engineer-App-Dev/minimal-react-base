import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {session && (
        <button onClick={logout}>Logout</button>
      )}
    </Router>
  );
}

export default App;