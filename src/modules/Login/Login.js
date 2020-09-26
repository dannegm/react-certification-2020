import React, { useState } from 'react';
import { Redirect } from 'react-router';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { useAuth } from '@/shared/providers/AuthProvider';

import { Page } from './Login.styled';

const Login = () => {
    useDocumentTitle('Login');
    const { authenticated, login, errors } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password });
    };

    if (!authenticated) {
        return (
            <Page>
                <h1>Login</h1>

                {errors}

                <form onSubmit={handleSubmit}>
                    <label>
                        Username
                        <input
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)}
                        />
                    </label>
                    <label>
                        Password
                        <input
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            type='password'
                        />
                    </label>

                    <button type='submit'>Login</button>
                </form>
            </Page>
        );
    }

    return <Redirect to='/' />;
};

export default Login;
