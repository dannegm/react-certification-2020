import React, { useState } from 'react';
import { Redirect } from 'react-router';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { useAuth } from '@/shared/providers/AuthProvider';

import { Button, TextField, PasswordField } from '@/shared/ui/components';
import { Shell } from '@ui/layout';
import { LockOutlineIcon, PersonOutlineIcon } from '@ui/icons';

import { Form, Title, Alert, Wrapper } from './Login.styled';

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
            <Shell>
                <Wrapper>
                    <Form onSubmit={handleSubmit}>
                        <Title>Sign in</Title>
                        <TextField
                            leftIcon={<PersonOutlineIcon />}
                            placeholder='Username'
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)}
                        />

                        <br />
                        <PasswordField
                            leftIcon={<LockOutlineIcon />}
                            placeholder='Password'
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />

                        {errors && <Alert>{errors}</Alert>}

                        <br />
                        <Button color='error' fullwidth>
                            Sign In
                        </Button>
                    </Form>
                </Wrapper>
            </Shell>
        );
    }

    return <Redirect to='/' />;
};

export default Login;
