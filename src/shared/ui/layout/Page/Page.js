import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container } from './Page.styled';

const Page = ({ children }) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};

Page.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Page;
