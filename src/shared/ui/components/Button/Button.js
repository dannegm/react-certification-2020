import React from 'react';
import PropTypes from 'prop-types';

import { buttonFactory } from './Button.styled';

const Button = ({ children, level, color, fullwidth, ...props }) => {
    const { ButtonWrapper } = buttonFactory(level);

    return (
        <ButtonWrapper color={color} fullwidth={fullwidth} {...props}>
            {children}
        </ButtonWrapper>
    );
};

export const levels = ['primary', 'secondary', 'tertiary'];

export const colors = ['base', 'error', 'success', 'warning'];

Button.propTypes = {
    children: PropTypes.node.isRequired,
    level: PropTypes.oneOf(levels),
    color: PropTypes.oneOf(colors),
    fullwidth: PropTypes.bool,
};

Button.defaultProps = {
    level: 'primary',
    color: 'base',
    fullwidth: false,
};

export default Button;
