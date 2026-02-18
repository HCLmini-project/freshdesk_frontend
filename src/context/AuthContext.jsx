import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            setUser(JSON.parse(currentUser));
        }
        setLoading(false);
    }, []);

    // Signup function
    const signup = (name, email, password, role) => {
        try {
            // Get existing users or initialize empty array
            const users = JSON.parse(localStorage.getItem('users') || '[]');

            // Check if email already exists
            if (users.some(u => u.email === email)) {
                return { success: false, message: 'Email already registered' };
            }

            // Create new user
            const newUser = {
                id: Date.now(),
                name,
                email,
                password, // In production, this should be hashed
                role
            };

            // Add to users array and save
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            return { success: true, message: 'Account created successfully' };
        } catch (error) {
            return { success: false, message: 'Signup failed' };
        }
    };

    // Login function
    const login = (email, password) => {
        try {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const foundUser = users.find(u => u.email === email && u.password === password);

            if (!foundUser) {
                return { success: false, message: 'Invalid email or password' };
            }

            // Store current user (without password)
            const userSession = {
                id: foundUser.id,
                name: foundUser.name,
                email: foundUser.email,
                role: foundUser.role
            };

            localStorage.setItem('currentUser', JSON.stringify(userSession));
            setUser(userSession);

            return { success: true, user: userSession };
        } catch (error) {
            return { success: false, message: 'Login failed' };
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
    };

    const value = {
        user,
        loading,
        signup,
        login,
        logout,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
