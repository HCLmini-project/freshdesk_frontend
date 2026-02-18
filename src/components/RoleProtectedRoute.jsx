import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RoleProtectedRoute = ({ children, allowedRole }) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== allowedRole) {
        // Redirect to appropriate dashboard based on actual role
        const redirectPath = user.role === 'CLIENT' ? '/client/dashboard' : '/admin/dashboard';
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export default RoleProtectedRoute;
