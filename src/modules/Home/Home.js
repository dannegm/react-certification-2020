import React from 'react';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { Shell } from '@ui/layout';

const Home = () => {
    useDocumentTitle('Home');

    return (
        <Shell>
            <h1>Home</h1>
        </Shell>
    );
};

export default Home;
