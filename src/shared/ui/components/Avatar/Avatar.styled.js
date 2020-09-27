import styled from 'styled-components';

export const Wrapper = styled.div`
    width: ${({ size }) => `${size}rem`};
    height: ${({ size }) => `${size}rem`};
    border-radius: 50%;
    overflow: hidden;
`;

export const AvatarPicture = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
