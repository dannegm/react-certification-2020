import React from 'react';
import PropTypes from 'prop-types';

import { Page, Container } from './Shell.styled';

const Shell = ({ children }) => {
    return (
        <Page>
            <Container>{children}</Container>
        </Page>
    );
};

Shell.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Shell;
