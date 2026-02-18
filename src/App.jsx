import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProtectedRoute from './components/ProtectedRoute';
import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={['CLIENT']} />}>
          <Route path="/client-dashboard" element={<Layout><ClientDashboard /></Layout>} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
          <Route path="/admin-dashboard" element={<Layout><AdminDashboard /></Layout>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
