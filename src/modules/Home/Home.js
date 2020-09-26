import React from 'react';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { useAuth } from '@/shared/providers/AuthProvider';

import { Page } from './Home.styled';

const Home = () => {
    useDocumentTitle('Home');
    const { user } = useAuth();

    return (
        <Page>
            <h1>Home</h1>
            <h2>Bienvenido: {user.displayName}</h2>
            <br />
            <a href='/logout'>Logout</a>
            <br />
            <img src={user.avatarUrl} alt='' />
        </Page>
    );
};

export default Home;
