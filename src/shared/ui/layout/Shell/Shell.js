import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import Page from '../Page';
import Searchbar from '../Searchbar';

import { Wrapper, Layout } from './Shell.styled';

const Shell = ({ children }) => {
    return (
        <Wrapper>
            <Page>
                <Layout>
                    <Navbar />
                    <Searchbar />
                    {children}
                </Layout>
            </Page>
        </Wrapper>
    );
};

Shell.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Shell;
