import styled from 'styled-components';

export const Wrapper = styled.svg`
    height: ${({ height }) => `${height}rem`};
    width: auto;
    color: ${({ color }) => color};

    path {
        fill: currentcolor;
    }
`;
