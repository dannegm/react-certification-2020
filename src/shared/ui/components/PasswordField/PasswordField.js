import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { EyeOutlineIcon, EyeOff2OutlineIcon } from '@ui/icons';

import TextField from '../TextField';

import { PasswordButton } from './PasswordField.styled';

const PasswordField = ({ showContent, ...props }) => {
    const [isShowing, setShowing] = useState(showContent);

    useEffect(() => {
        setShowing(showContent);
    }, [showContent]);

    const EyeIcon = isShowing ? <EyeOutlineIcon /> : <EyeOff2OutlineIcon />;

    const ToggleType = (
        <PasswordButton onClick={() => setShowing((state) => !state)}>
            {EyeIcon}
        </PasswordButton>
    );

    return (
        <TextField
            rightIcon={ToggleType}
            type={isShowing ? 'text' : 'password'}
            {...props}
        />
    );
};

PasswordField.propTypes = {
    showContent: PropTypes.bool,
};

PasswordField.defaultProps = {
    showContent: false,
};

export default PasswordField;
