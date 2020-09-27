import React from 'react';
import { useHistory } from 'react-router';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { useAuth } from '@/shared/providers/AuthProvider';

import { Button } from '@ui/components';
import { Shell } from '@ui/layout';
import { LogOutOutlineIcon } from '@ui/icons';

import { Wrapper, Layout } from './Home.styled';

const Home = () => {
    useDocumentTitle('Home');

    const history = useHistory();
    const { user } = useAuth();

    return (
        <Wrapper>
            <Shell>
                <Layout></Layout>
            </Shell>
        </Wrapper>
    );
};

export default Home;
