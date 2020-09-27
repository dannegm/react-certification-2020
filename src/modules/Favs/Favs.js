import React from 'react';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { Shell } from '@ui/layout';

const Favs = () => {
    useDocumentTitle('Favs');

    return (
        <Shell>
            <h1>Favs</h1>
        </Shell>
    );
};

export default Favs;
