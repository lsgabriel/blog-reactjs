import styled from "styled-components";

export const Container = styled.div`

    .wrapper{
        display: flex;justify-content:center;padding-top: 4rem;

        /* Responsivo Celular */
        @media only screen and (max-width: 440px){flex-direction:column;}
    }

    h1{
        font-size: 2.875rem;font-weight:500;
        line-height: 55px;letter-spacing: 1.3px;

        /* Responsivo Celular */
        @media only screen and (max-width: 440px){
            font-size:2.5rem;line-height:45px;
            text-align:center;margin-bottom:1rem;
        }
    }

    .primary{
        font-size: 1.25rem;line-height: 33px;letter-spacing: 0.9px;

        /* Responsivo Celular */
        @media only screen and (max-width: 440px){text-align:center;}
    }

    .secondary{font-size: 16px;line-height: 20px;letter-spacing: 1px;}
    .secondary:last-child {
        @media only screen and (max-width: 440px){text-align:center;}
    }

    header{
        width: 30.5rem;

        /* Responsivo Tablet */
        @media only screen and (max-width: 820px){width:50vw;}

        /* Responsivo Celular */
        @media only screen and (max-width: 440px){width:100vw;}

            .author{
                display: flex;flex-direction:row;align-items:center;gap:0.50rem;

                /* Responsivo Celular */
                @media only screen and (max-width: 440px){justify-content:center;margin-bottom:2rem;}

                .author-desc > p{line-height: 5px;}
            }
    }

    .div-image{

        /* Responsivo Tablet */
        @media only screen and (max-width: 820px){width:30vw;}

        /* Responsivo Celular */
        @media only screen and (max-width: 440px){width:100vw;}

        .players{
            width: auto;height:auto;

            /* Responsivo Tablet */
            @media only screen and (max-width: 820px){width:45vw;}

            /* Responsivo Celular */
            @media only screen and (max-width: 440px){width:90vw;margin:auto 5vw ;}
        }
    }

    .blogs{
        margin-block:3rem;border-top:solid 1px #2a2a2a;

        h1{margin-block:0.50rem;}
    }
    
    section{
        display: flex;flex-direction:row;
        justify-content: center;
        gap:1.75rem;

        /* Responsivo Tablet */
        @media only screen and (max-width: 820px){flex-wrap:wrap;}
    }


    footer{
        width:50vw;padding:1rem;
        flex-direction: column;
        border-top:solid 1px #2a2a2a;
        display:flex;justify-content:center;margin:auto;

        h2{font-size: 2.375rem;letter-spacing: 1.3px;}

        /* Responsivo Tablet */
        @media only screen and (max-width: 820px){width:65vw;}

        /* Responsivo Celular */
        @media only screen and (max-width: 440px){width:90vw;}

        form{
            display:flex;flex-wrap:wrap;gap:0.5rem;

            .name, .email{flex:1 0 10rem;}

            input[type='text'], input[type='email']{
                border:none;border-radius: 0.25rem;padding-left:0.50rem;
                box-shadow: 0px 46px 130px 0px #071F4D26;
            }

            button{
                color:white;
                &:hover{
                    opacity:0.9;color:whitesmoke;
                }
            }
        }
    }
`;