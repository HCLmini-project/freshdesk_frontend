
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './layouts/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import RoleProtectedRoute from './components/RoleProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route
            path="/client/dashboard"
            element={
              <RoleProtectedRoute allowedRole="CLIENT">
                <Layout><ClientDashboard /></Layout>
              </RoleProtectedRoute>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <RoleProtectedRoute allowedRole="ADMIN">
                <Layout><AdminDashboard /></Layout>
              </RoleProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
