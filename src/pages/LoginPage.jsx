
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import { authService } from '../services/authService';

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const user = await authService.login(formData.email, formData.password);

            // Redirect based on role
            if (user.role === 'ADMIN') {
                navigate('/admin-dashboard');
            } else {
                navigate('/client-dashboard');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthCard title="Welcome Back" isLogin={true}>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2C5CC5] focus:border-transparent transition"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2C5CC5] focus:border-transparent transition"
                        placeholder="••••••••"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <a href="#" className="font-medium text-[#2C5CC5] hover:text-[#1e4499]">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#12344D] to-[#2C5CC5] hover:from-[#0e2a3e] hover:to-[#22489c]'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C5CC5] transform transition hover:-translate-y-0.5 shadow-lg`}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                </div>

                <div className="text-center mt-4">
                    <span className="text-gray-600 text-sm">Not a member? </span>
                    <Link to="/signup" className="font-medium text-[#2C5CC5] hover:text-[#1e4499] text-sm">
                        Signup now
                    </Link>
                </div>
            </form>
        </AuthCard>
    );
};

export default LoginPage;
