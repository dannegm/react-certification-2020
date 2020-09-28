import React from 'react';
import { useAuth } from '@/shared/providers/AuthProvider';

import Avatar from '@ui/components/Avatar';
import Link from './components/Link';

import { HomeOutlineIcon, LogOutOutlineIcon, StarOutlineIcon } from '@ui/icons';

import { Wrapper, Spacer } from './Navbar.styled';

const Navbar = () => {
    const { user } = useAuth();

    return (
        <Wrapper>
            <Link icon={<HomeOutlineIcon />} label='Home' route='/' />
            <Spacer />
            <Avatar src={user.avatarUrl} />
            <Link icon={<StarOutlineIcon />} route='/favs' />
            <Link icon={<LogOutOutlineIcon />} route='/logout' />
        </Wrapper>
    );
};

export default Navbar;
