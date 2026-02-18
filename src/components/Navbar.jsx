
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const Navbar = () => {
    const navigate = useNavigate();
    const user = authService.getCurrentUser();

    const handleLogout = () => {
        authService.logout();
        navigate('/');
    };

    return (
        <nav className="bg-[#12344D] text-white py-4 px-6 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold flex items-center gap-2">
                    <span className="bg-gradient-to-r from-blue-400 to-green-400 w-8 h-8 rounded-full"></span>
                    Simplesk
                </Link>

                {user ? (
                    <div className="flex gap-6 items-center">
                        <span className="text-gray-300">
                            Welcome, <span className="font-bold text-white">{user.name}</span>
                            <span className="ml-2 text-xs bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded border border-blue-500/30">{user.role}</span>
                        </span>
                        <button
                            onClick={handleLogout}
                            className="text-gray-300 hover:text-white font-medium"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="hidden md:flex gap-8 items-center font-medium">
                            <a href="#features" className="hover:text-gray-300">Features</a>
                            <a href="#pricing" className="hover:text-gray-300">Pricing</a>
                            <a href="#support" className="hover:text-gray-300">Support</a>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link to="/login" className="hover:text-gray-300 font-medium">Login</Link>
                            <Link to="/signup" className="bg-[#47C2B4] hover:bg-[#3daeca] text-white px-5 py-2 rounded-full font-bold transition">
                                Sign up
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
