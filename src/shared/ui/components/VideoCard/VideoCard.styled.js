import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    gap: 1rem;
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
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 0.4rem;
`;
export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ChannelTitle = styled.div`
    font-size: 0.8rem;
    color: #acacac;
    margin-bottom: 0.4rem;
`;

export const TimeAgo = styled.div`
    font-size: 0.7rem;
    color: #b3b3b3;
`;
