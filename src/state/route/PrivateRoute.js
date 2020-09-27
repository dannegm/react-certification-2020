import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '@/shared/providers/AuthProvider';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { authenticated, loading } = useAuth();

    if (loading) {
        return <></>;
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                !authenticated ? (
                    <Redirect to='/login' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PrivateRoute;
