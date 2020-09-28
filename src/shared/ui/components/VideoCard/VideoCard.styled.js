import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    gap: 0.5rem;
    cursor: pointer;
`;

export const ThumbnailWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 56.2%;
`;

export const Thumbnail = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    background: #000000;
    border-radius: 1rem;
`;

export const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.1;
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ChannelTitle = styled.div`
    font-size: 1rem;
    color: #acacac;
`;

export const TimeAgo = styled.div`
    font-size: 0.8rem;
    color: #b3b3b3;
`;
