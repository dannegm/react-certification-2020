import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, AvatarPicture } from './Avatar.styled';

const Avatar = ({ src, size }) => {
    return (
        <Wrapper size={size}>
            <AvatarPicture src={src} alt='' />
        </Wrapper>
    );
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.number,
};

Avatar.defaultProps = {
    size: 2,
};

export default Avatar;
