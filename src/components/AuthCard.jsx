
const AuthCard = ({ children, title, isLogin }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="px-8 py-10">
                    <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">{title}</h2>

                    {/* Toggle Switch */}
                    <div className="flex bg-gray-100 rounded-full p-1 mb-8 relative">
                        <a
                            href="/login"
                            className={`w-1/2 text-center py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isLogin ? 'bg-[#12344D] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Login
                        </a>
                        <a
                            href="/signup"
                            className={`w-1/2 text-center py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isLogin ? 'bg-[#12344D] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Signup
                        </a>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthCard;
