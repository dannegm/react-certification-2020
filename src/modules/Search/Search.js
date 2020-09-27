import React from 'react';
import queryString from 'query-string';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { Shell } from '@ui/layout';

const Search = () => {
    useDocumentTitle('Search');
    const { q: query } = queryString.parse(
        decodeURI(window.location.href.split('search?')[1])
    );

    return (
        <Shell>
            <h1>Search</h1>
            <b>Resultados para:</b>
            <p>{query}</p>
        </Shell>
    );
};

export default Search;
