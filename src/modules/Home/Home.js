import React from 'react';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { useAuth } from '@/shared/providers/AuthProvider';

import { Button } from '@/shared/ui/components';
import { Shell } from '@ui/layout';
import { LogOutOutlineIcon } from '@ui/icons';

import { useHistory } from 'react-router';

const Home = () => {
    useDocumentTitle('Home');

    const history = useHistory();
    const { user } = useAuth();

    return (
        <Shell>
            <h1>Home</h1>
            <h2>{user.displayName}</h2>
            <br />
            <Button onClick={() => history.push('/logout')}>
                <LogOutOutlineIcon />
                <span>Logout</span>
            </Button>
            <br />
            <br />
            <img src={user.avatarUrl} alt='' />
        </Shell>
    );
};

export default Home;
