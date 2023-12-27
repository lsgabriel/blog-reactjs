import styled from "styled-components";

export const Container = styled.div`
    width:24rem;border:none;

    /* Responsivo Celular */
    @media only screen and (max-width: 440px){
        width:90vw;display:flex;justify-content:center;
        flex-direction:column;
    }

    h3{
        font-size: 2rem;font-weight:500;
        line-height: 33px;letter-spacing: 1.3px;
        margin-block:1rem;
    }

    p{
        font-size: 1.25rem;line-height: 33px;letter-spacing: 0.9px;
    }
`;