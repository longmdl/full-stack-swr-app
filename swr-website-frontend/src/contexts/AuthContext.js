// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // load saved token (if any)
    const [token, setToken] = useState(() => localStorage.getItem('jwt'));

    const isAuthenticated = Boolean(token);

    // whenever token changes, configure axios
    useEffect(() => {
        if (token) {
            // set default auth header
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    // call this on successful login/registration
    const login = (newToken) => {
        localStorage.setItem('jwt', newToken);
        setToken(newToken);
        // axios header will be set by the useEffect above
    };

    const logout = () => {
        localStorage.removeItem('jwt');
        setToken(null);
        // axios header is cleaned up by the useEffect
    };

    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}
