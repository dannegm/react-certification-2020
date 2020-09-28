import React from 'react';

import AuthProvider from '@/shared/providers/AuthProvider';
import FavsProvider from '@/shared/providers/FavsProvider';

import RouteHandler from './state/route/RouteHandler';
import GlobalStyle from './shared/ui/styles/GlobalStyle';

const App = () => {
    return (
        <AuthProvider>
            <FavsProvider>
                <GlobalStyle />
                <RouteHandler />
            </FavsProvider>
        </AuthProvider>
    );
};
export default App;
