import styled, { css } from 'styled-components';

export const PlayerWrapper = styled.div`
    display: block;
    margin-top: 2rem;

    width: 100%;
    position: relative;
    padding-bottom: 56.2%;

    & > .youtube-player__container {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        background: #000000;
        border-radius: 0.5rem;
        overflow: hidden;
        & > .youtube-player {
            width: 100%;
            height: 100%;
        }
    }
`;
