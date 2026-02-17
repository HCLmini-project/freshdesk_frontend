
import { Link } from 'react-router-dom';
import AuthCard from '../components/AuthCard';

const SignupPage = () => {
    return (
        <AuthCard title="Create Account" isLogin={false}>
            <form className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
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
                        className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2C5CC5] focus:border-transparent transition"
                        placeholder="••••••••"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-gradient-to-r from-[#12344D] to-[#2C5CC5] hover:from-[#0e2a3e] hover:to-[#22489c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C5CC5] transform transition hover:-translate-y-0.5 shadow-lg"
                    >
                        Signup
                    </button>
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
