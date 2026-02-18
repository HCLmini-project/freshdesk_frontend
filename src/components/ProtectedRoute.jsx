import { Navigate, Outlet } from 'react-router-dom';
import { authService } from '../services/authService';

const ProtectedRoute = ({ allowedRoles }) => {
    const user = authService.getCurrentUser();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Redirect to appropriate dashboard if role is not allowed
        return <Navigate to={user.role === 'ADMIN' ? '/admin-dashboard' : '/client-dashboard'} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
