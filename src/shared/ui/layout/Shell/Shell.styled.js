import styled from 'styled-components';

export const Page = styled.div`
    display: block;
`;

export const Container = styled.div`
    display: block;
    margin: 1rem auto;
    width: 460px;

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 458px) {
        width: auto;
        margin: 1rem;
    }
`;
