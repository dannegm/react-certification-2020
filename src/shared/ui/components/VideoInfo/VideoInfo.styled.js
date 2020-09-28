import styled, { css } from 'styled-components';

export const Separator = styled.div`
    flex: 1;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;
`;

export const InfoHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex;
`;

export const InfoTitle = styled.h1`
    font-size: 1rem;
`;

export const InfoViews = styled.small`
    font-size: 0.8rem;
    font-weight: 400;
    color: #8d8d8d;
    display: block;
    margin-top: -1rem;
`;

export const InfoExpand = styled.button`
    transform: rotate(0deg);
    transition: all 0.2s;
    background: none;
    border: 0;
    outline: 0;
    padding: 0;
    cursor: pointer;

    & > svg {
        font-size: 1.8rem;
    }

    ${({ expanded }) =>
        !expanded &&
        css`
            transform: rotate(180deg);
        `}
`;

export const InfoContent = styled.div`
    height: auto;
    max-height: 2000px;
    transition: all 0.3s;
    overflow: hidden;

    ${({ expanded }) =>
        !expanded &&
        css`
            max-height: 0;
        `}
`;

export const InfoDescription = styled.div`
    font-size: 0.85rem;
`;

export const InfoActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;

export const InfoActionWrapper = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    padding: 0;
    background: none;
    border: 0;
    outline: 0;
    color: #c2c2c2;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        color: #f61c2c;
    }
    &:active {
        transform: scale(0.8);
    }
`;

export const InfoActionIcon = styled.div`
    display: block;
    & > svg {
        font-size: 1.5rem;
    }
`;

export const InfoActionLabel = styled.span`
    display: block;
    font-size: 0.85rem;
    line-height: 1;
`;
