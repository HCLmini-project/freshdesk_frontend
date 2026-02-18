
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-[#12344D] text-white py-4 px-6 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold flex items-center gap-2">
                    <span className="bg-gradient-to-r from-blue-400 to-green-400 w-8 h-8 rounded-full"></span>
                    Simplesk
                </Link>
                <div className="hidden md:flex gap-8 items-center font-medium">
                    <a href="#features" className="hover:text-gray-300">Features</a>
                    <a href="#pricing" className="hover:text-gray-300">Pricing</a>
                    <a href="#support" className="hover:text-gray-300">Support</a>
                </div>
                <div className="flex gap-4 items-center">
                    {isAuthenticated ? (
                        <>
                            <span className="text-sm">
                                Welcome, <span className="font-semibold">{user?.name}</span>
                            </span>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${user?.role === 'ADMIN'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-blue-100 text-blue-800'
                                }`}>
                                {user?.role}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="bg-[#47C2B4] hover:bg-[#3daeca] text-white px-5 py-2 rounded-full font-bold transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-gray-300 font-medium">Login</Link>
                            <Link to="/signup" className="bg-[#47C2B4] hover:bg-[#3daeca] text-white px-5 py-2 rounded-full font-bold transition">
                                Sign up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
