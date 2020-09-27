import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { useAuth } from '@/shared/providers/AuthProvider';

import { AUTH_ERROR_USER, AUTH_ERROR_PASS } from '@/shared/utils/constants';

import { Button, TextField, PasswordField } from '@ui/components';
import { Page } from '@ui/layout';
import { LockOutlineIcon, PersonOutlineIcon } from '@ui/icons';

import { Form, Title, Alert, Wrapper } from './Login.styled';

const errorMessages = {
    [`Error: ${AUTH_ERROR_USER}`]: 'User not found',
    [`Error: ${AUTH_ERROR_PASS}`]: 'Invalid password',
};

const Login = () => {
    useDocumentTitle('Login');
    const { authenticated, login, errors } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setPassword('');
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password });
    };

    if (!authenticated) {
        return (
            <Page>
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

                        {errors && <Alert>{errorMessages[errors]}</Alert>}

                        <br />
                        <Button color='error' fullwidth>
                            Sign In
                        </Button>
                    </Form>
                </Wrapper>
            </Page>
        );
    }

    return <Redirect to='/' />;
};

export default Login;
