
const USERS_KEY = 'freshdesk_users';
const CURRENT_USER_KEY = 'freshdesk_current_user';

export const authService = {
    signup: (userData) => {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

        if (users.some(u => u.email === userData.email)) {
            throw new Error('Email already registered');
        }

        const newUser = {
            id: Date.now().toString(),
            ...userData,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        return newUser;
    },

    login: (email, password) => {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Don't store password in session
        const { password: _, ...userSession } = user;
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userSession));
        return userSession;
    },

    logout: () => {
        localStorage.removeItem(CURRENT_USER_KEY);
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    },

    isAuthenticated: () => {
        return !!localStorage.getItem(CURRENT_USER_KEY);
    }
};
