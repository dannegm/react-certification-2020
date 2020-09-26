import React from 'react';
import { Redirect } from 'react-router';

import useDocumentTitle from '@/shared/hooks/useDocumentTitle';

import { useAuth } from '@/shared/providers/AuthProvider';

const Logout = () => {
    useDocumentTitle('Redirect to Login...');
    const { logout } = useAuth();
    logout();

    return <Redirect to='/login' />;
};

export default Logout;
