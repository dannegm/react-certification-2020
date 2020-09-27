import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FieldWrapper, FieldIcon, FieldInput } from './TextField.styled';

const TextField = ({ leftIcon, rightIcon, ...props }) => {
    const [hasFocus, setFocus] = useState(false);
    return (
        <FieldWrapper hasFocus={hasFocus}>
            {!!leftIcon && <FieldIcon>{leftIcon}</FieldIcon>}
            <FieldInput
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                {...props}
            />
            {!!rightIcon && <FieldIcon>{rightIcon}</FieldIcon>}
        </FieldWrapper>
    );
};

const types = ['text', 'password', 'url', 'tel', 'search'];

TextField.propTypes = {
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    value: PropTypes.string.isRequired,
    type: PropTypes.oneOf(types),
};

TextField.defaultProps = {
    leftIcon: null,
    rightIcon: null,
    type: 'text',
};

export default TextField;
