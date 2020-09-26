import React from 'react';
import PropTypes from 'prop-types';

import { SvgWrapper } from './SvgIcon.styled';

const SvgIcon = ({ children, viewBox, focusable, ...rest }) => {
    return (
        <SvgWrapper viewBox={viewBox} focusable={focusable} {...rest}>
            {children}
        </SvgWrapper>
    );
};

SvgIcon.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    fill: PropTypes.string,
    focusable: PropTypes.bool,
    size: PropTypes.string,
    viewBox: PropTypes.string,
};

SvgIcon.defaultProps = {
    children: null,
    color: 'inherit',
    fill: 'currentColor',
    focusable: false,
    viewBox: '0 0 24 24',
    size: '1em',
};

export default SvgIcon;
