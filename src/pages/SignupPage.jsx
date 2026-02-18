
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import { useAuth } from '../context/AuthContext';

const SignupPage = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'CLIENT'
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validation
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email');
            return;
        }

        // Attempt signup
        const result = signup(formData.name, formData.email, formData.password, formData.role);

        if (result.success) {
            setSuccess(result.message);
            setTimeout(() => {
                navigate('/login');
            }, 1500);
        } else {
            setError(result.message);
        }
    };

    return (
        <AuthCard title="Create Account" isLogin={false}>
            <form className="space-y-5" onSubmit={handleSubmit}>
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                        {success}
                    </div>
                )}

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
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2C5CC5] focus:border-transparent transition"
                        placeholder="••••••••"
                    />
                </div>

                {/* Role Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Role</label>
                    <div className="flex gap-4">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="role"
                                value="CLIENT"
                                checked={formData.role === 'CLIENT'}
                                onChange={handleChange}
                                className="w-4 h-4 text-[#2C5CC5] border-gray-300 focus:ring-[#2C5CC5]"
                            />
                            <span className="ml-2 text-sm text-gray-700">Client</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="role"
                                value="ADMIN"
                                checked={formData.role === 'ADMIN'}
                                onChange={handleChange}
                                className="w-4 h-4 text-[#2C5CC5] border-gray-300 focus:ring-[#2C5CC5]"
                            />
                            <span className="ml-2 text-sm text-gray-700">Admin</span>
                        </label>
                    </div>
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
