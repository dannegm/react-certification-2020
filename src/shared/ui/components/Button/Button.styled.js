import styled, { css } from 'styled-components';
import { tint, rgba, shade } from 'polished';

const colors = {
    base: {
        main: '#0076F5',
        contrast: '#fff',
    },
    error: {
        main: '#E71E26',
        contrast: '#fff',
    },
    success: {
        main: '#34C863',
        contrast: '#fff',
    },
    warning: {
        main: '#FFB12B',
        contrast: '#000',
    },
};

/* Primary Button */

const PrimaryButtonWrapper = styled.button`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }) => colors[color].main};
    color: ${({ color }) => colors[color].contrast};
    padding: 0.85rem 1.5rem;
    border-color: ${({ color }) => colors[color].main};
    border-style: solid;
    border-width: 0;
    border-radius: 1.875rem;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    transition: all 0.2s;
    cursor: pointer;

    & > span {
        margin: 0 0.5rem;
    }

    &:not([disabled]):hover {
        background-color: ${({ color }) => shade(0.1, colors[color].main)};
    }

    &[disabled] {
        background-color: ${({ color }) => tint(0.5, colors[color].main)};
        cursor: not-allowed;
    }

    ${({ fullwidth }) =>
        fullwidth &&
        css`
            display: block;
            width: 100%;
        `}
`;

/* Secondary */

const SecondaryButtonWrapper = styled(PrimaryButtonWrapper)`
    background-color: transparent;
    color: ${({ color }) => colors[color].main};
    border-width: 1px;
    cursor: pointer;

    &:not([disabled]):hover {
        background-color: ${({ color }) => rgba(colors[color].main, 0.1)};
    }

    &[disabled] {
        background-color: transparent;
        color: ${({ color }) => tint(0.5, colors[color].main)};
        border-color: ${({ color }) => tint(0.5, colors[color].main)};
    }
`;

/* Tertiary */

const TertiaryButtonWrapper = styled(PrimaryButtonWrapper)`
    background-color: transparent;
    color: ${({ color }) => colors[color].main};
    position: relative;

    &::after {
        content: ' ';
        display: block;
        height: 1px;
        background-color: ${({ color }) => colors[color].main};
        position: absolute;
        top: 1.75rem;
        width: 0;
        transition: width 0.1s;
    }

    &:not([disabled]):hover {
        background-color: transparent;
    }

    &:not([disabled]):hover::after {
        width: calc(100% - 3rem);
    }

    &[disabled] {
        background-color: transparent;
        color: ${({ color }) => tint(0.5, colors[color].main)};
    }
`;

/* Factory */

const buttonFactory = (level) => {
    const levels = {
        primary: {
            ButtonWrapper: PrimaryButtonWrapper,
        },
        secondary: {
            ButtonWrapper: SecondaryButtonWrapper,
        },
        tertiary: {
            ButtonWrapper: TertiaryButtonWrapper,
        },
    };

    return levels[level];
};

export { buttonFactory };
