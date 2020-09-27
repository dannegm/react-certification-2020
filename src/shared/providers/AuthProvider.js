import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY } from '@/shared/utils/constants';

import useLocalStorage from '@/shared/hooks/useLocalStorage';

import { requestLogin } from '@/shared/services/AuthService';

const AuthContext = React.createContext(null);

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(`Can't use "useAuth" without an AuthProvider!`);
    }
    return context;
};

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const [errors, setErrors] = useState(null);

    const [lastAuthState, setAuthState] = useLocalStorage(AUTH_STORAGE_KEY);

    useEffect(() => {
        const isAuthenticated = Boolean(lastAuthState);
        setAuthenticated(isAuthenticated);
        setLoading(false);

        if (isAuthenticated) {
            setUser(lastAuthState.user);
        }
    }, []);

    const login = useCallback(async ({ username, password }) => {
        setErrors(null);

        try {
            const responsedUser = await requestLogin({ username, password });
            setAuthenticated(true);
            setAuthState({ user: responsedUser });
            setUser(responsedUser);
            setLoading(false);
        } catch (err) {
            setAuthenticated(false);
            setErrors(err.toString());
            setLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        setAuthenticated(false);
        setAuthState(null);
        setUser({});
        setErrors(null);
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{ login, logout, authenticated, user, loading, errors }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { useAuth };
export default AuthProvider;
