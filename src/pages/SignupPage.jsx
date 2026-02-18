
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import { authService } from '../services/authService';

const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        role: 'CLIENT'
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirm_password) {
            setError("Passwords don't match");
            return;
        }

        setLoading(true);
        try {
            await authService.signup(formData);
            navigate('/login');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthCard title="Create Account" isLogin={false}>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2C5CC5] focus:border-transparent transition"
                        placeholder="John Doe"
                    />
                </div>
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
                <div>
                    <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                        id="confirm_password"
                        name="confirm_password"
                        type="password"
                        required
                        value={formData.confirm_password}
                        onChange={handleChange}
                        className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2C5CC5] focus:border-transparent transition"
                        placeholder="••••••••"
                    />
                </div>

                <div className="flex gap-4 justify-center mb-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name="role"
                            value="CLIENT"
                            checked={formData.role === 'CLIENT'}
                            onChange={handleChange}
                            className="text-[#2C5CC5] focus:ring-[#2C5CC5]"
                        />
                        <span className="text-gray-700 font-medium">Client</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name="role"
                            value="ADMIN"
                            checked={formData.role === 'ADMIN'}
                            onChange={handleChange}
                            className="text-[#2C5CC5] focus:ring-[#2C5CC5]"
                        />
                        <span className="text-gray-700 font-medium">Admin</span>
                    </label>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#12344D] to-[#2C5CC5] hover:from-[#0e2a3e] hover:to-[#22489c]'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C5CC5] transform transition hover:-translate-y-0.5 shadow-lg`}
                    >
                        {loading ? 'Creating Account...' : 'Signup'}
                    </button>
                    {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                </div>

                <div className="text-center mt-4">
                    <span className="text-gray-600 text-sm">Already have an account? </span>
                    <Link to="/login" className="font-medium text-[#2C5CC5] hover:text-[#1e4499] text-sm">
                        Login
                    </Link>
                </div>
            </form>
        </AuthCard>
    );
};

export default SignupPage;
