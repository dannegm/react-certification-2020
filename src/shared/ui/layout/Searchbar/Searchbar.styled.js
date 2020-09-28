import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    padding: 0.25rem 0.5rem;
    background: 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.13);
    border: 1px solid transparent;
    border-radius: 1.5rem;

    ${({ hasFocus }) =>
        hasFocus &&
        css`
            border-color: #e54247;
        `}
`;

export const LogoWrapper = styled.div`
    margin: 0.5rem;
`;

export const IconButton = styled.button`
    background: none;
    border: 0;
    outline: 0;
    margin: 0.5rem;
    padding: 0;
    line-height: 1;
    cursor: pointer;

    svg {
        color: #191919;
        font-size: 1.2rem;
    }
`;

export const FieldInput = styled.input`
    flex: 1;
    display: block;
    margin: 0.5rem;
    padding: 0;
    background: none;
    border: 0;
    outline: none;
    font-size: 1rem;
`;
