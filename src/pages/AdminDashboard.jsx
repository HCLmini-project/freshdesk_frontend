
import { authService } from '../services/authService';

const AdminDashboard = () => {
    const user = authService.getCurrentUser();

    // Mock stats
    const stats = [
        { label: 'Total Tickets', value: 124, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Open Tickets', value: 45, color: 'text-orange-600', bg: 'bg-orange-50' },
        { label: 'Resolved', value: 79, color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'Avg Response', value: '2.5h', color: 'text-purple-600', bg: 'bg-purple-50' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <p className="text-gray-600 mt-1">Welcome back, {user?.name || 'Admin'}. Here's what's happening today.</p>
                </div>
                <button className="bg-[#2C5CC5] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#234b9e] transition">
                    Generate Report
                </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                        <span className="text-gray-500 text-sm font-medium mb-2">{stat.label}</span>
                        <div className="flex items-end justify-between">
                            <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                            <div className={`p-2 rounded-lg ${stat.bg}`}>
                                <div className={`w-4 h-4 rounded-full ${stat.color.replace('text-', 'bg-')}`}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Recent Activity / Ticket Queue */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-bold text-gray-900">Recent Tickets</h3>
                        <a href="#" className="text-[#2C5CC5] text-sm font-medium hover:underline">View All</a>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="p-4 hover:bg-gray-50 transition flex items-center justify-between">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-bold">
                                        CU
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Login issue on mobile app</h4>
                                        <p className="text-xs text-gray-500">Created by Client User • 2 hours ago</p>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                                    Open
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-[#f3f6fc] hover:border-[#2C5CC5] hover:text-[#2C5CC5] transition font-medium flex items-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            New Ticket
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-[#f3f6fc] hover:border-[#2C5CC5] hover:text-[#2C5CC5] transition font-medium flex items-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            Manage Users
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-[#f3f6fc] hover:border-[#2C5CC5] hover:text-[#2C5CC5] transition font-medium flex items-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            System Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
