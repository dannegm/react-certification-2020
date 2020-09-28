import React from 'react';
import PropTypes from 'prop-types';

import { AlertTriangleIcon } from '@ui/icons';

import {
    Wrapper,
    IconWrapper,
    Title,
    Content,
    Description,
} from './Alert.styled';

const Alert = ({ title, children }) => {
    return (
        <Wrapper>
            <IconWrapper>
                <AlertTriangleIcon />
            </IconWrapper>
            <Content>
                {!!title.trim() && <Title>{title}</Title>}
                <Description>{children}</Description>
            </Content>
        </Wrapper>
    );
};

Alert.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
    title: '',
};

export default Alert;
