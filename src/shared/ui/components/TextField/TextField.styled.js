import styled, { css } from 'styled-components';

export const FieldWrapper = styled.div`
    padding: 0.25rem;
    background-color: #f3f3f3;
    border-radius: 0.25rem;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    border: 1px solid transparent;

    ${({ hasFocus }) =>
        hasFocus &&
        css`
            border-color: #b4e3f7;
            box-shadow: 0 0 0 1px rgb(0 0 0 / 30%),
                0 0.25rem 3rem 0 rgb(0 0 0 / 5%);
        `}
`;

export const FieldIcon = styled.div`
    margin: 0.5rem;
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
    overflow: hidden;
    background: none;
    border: 0;
    outline: none;
    font-size: 1rem;
`;
