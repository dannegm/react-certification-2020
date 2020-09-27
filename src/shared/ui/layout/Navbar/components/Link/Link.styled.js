import styled, { css } from 'styled-components';

const LinkIcon = styled.div`
    overflow: hidden;
    & > svg {
        font-size: 1.4rem;
    }
`;

const LinkLabel = styled.span`
    display: block;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0.5rem;
`;

const Wrapper = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: 0;
    border-radius: 2rem;
    outline: 0;
    padding: 0.6rem;
    cursor: pointer;

    &:hover {
        color: #e53036;
    }

    ${({ actived }) =>
        actived &&
        css`
            background: #fbcecf;
            color: #e53036;
        `}
`;

export { Wrapper, LinkIcon, LinkLabel };
