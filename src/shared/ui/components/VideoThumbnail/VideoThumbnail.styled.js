import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    margin: 1rem 0;
    gap: 1rem;
    cursor: pointer;
`;

export const Info = styled.div``;

export const Thumbnail = styled.img`
    width: 10rem;
    height: calc(10rem * 0.5625);
    object-fit: cover;
    background: #000000;
    border-radius: 1rem;
`;

export const Title = styled.div`
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 0.4rem;
`;

export const ChannelTitle = styled.div`
    font-size: 0.8rem;
    color: #acacac;
    margin-bottom: 0.4rem;
`;

export const ExtraInfo = styled.div`
    font-size: 0.7rem;
    color: #b3b3b3;
`;
