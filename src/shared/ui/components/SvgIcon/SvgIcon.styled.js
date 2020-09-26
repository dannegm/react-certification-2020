import styled from 'styled-components';

export const SvgWrapper = styled.svg`
    display: inline-block;
    color: ${({ color }) => color};
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    fill: ${({ fill }) => fill};
    font-size: 1.5rem;
    user-select: none;
    flex-shrink: 0;
`;
