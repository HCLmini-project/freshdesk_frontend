
import { authService } from '../services/authService';

const ClientDashboard = () => {
    const user = authService.getCurrentUser();

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name || 'Client'}!</h1>
                <p className="text-gray-600 mt-2">Here you can manage your support tickets and find answers.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Submit Ticket Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition cursor-pointer group">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-[#2C5CC5] group-hover:bg-[#2C5CC5] group-hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Submit a Ticket</h3>
                    <p className="text-gray-600 text-sm">Facing an issue? Create a new support ticket and we'll help you out.</p>
                </div>

                {/* My Tickets Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition cursor-pointer group">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 text-[#47C2B4] group-hover:bg-[#47C2B4] group-hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">My Tickets</h3>
                    <p className="text-gray-600 text-sm">View the status of your existing tickets and reply to support agents.</p>
                </div>

                {/* Knowledge Base Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition cursor-pointer group">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Knowledge Base</h3>
                    <p className="text-gray-600 text-sm">Browse articles and FAQs to find quick solutions to common problems.</p>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;
