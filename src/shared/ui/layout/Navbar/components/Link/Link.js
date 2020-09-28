import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router';

import { Wrapper, LinkIcon, LinkLabel } from './Link.styled';

const Link = ({ icon, label, route }) => {
    const history = useHistory();
    const match = useRouteMatch({
        path: route,
        exact: true,
    });

    const handleClick = (e) => {
        e.preventDefault();
        history.push(route);
    };

    return (
        <Wrapper actived={match} onClick={handleClick}>
            {icon && <LinkIcon>{icon}</LinkIcon>}
            {label && <LinkLabel>{label}</LinkLabel>}
        </Wrapper>
    );
};

Link.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    route: PropTypes.string.isRequired,
};

Link.defaultProps = {
    icon: null,
    label: '',
};

export default Link;
