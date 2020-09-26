import React from 'react';

import AuthProvider from '@/shared/providers/AuthProvider';

import RouteHandler from './state/route/RouteHandler';
import GlobalStyle from './shared/styles/GlobalStyle';

const App = () => {
    return (
        <AuthProvider>
            <GlobalStyle />
            <RouteHandler />
        </AuthProvider>
    );
};
export default App;
