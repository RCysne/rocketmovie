import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: ${({theme}) => theme.COLORS.BACKGROUND_DARK};
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }


`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a{
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;


export const Content = styled.div`
    max-width: 70%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    /* Alinhamento do botão Excluir nota, exemplo 2 */
    > button:first-child {
        align-self: start;
        color: ${({theme}) => theme.COLORS.PINK}
    }

    .author {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 10px;

        margin: 40px 0;
    }

    .author > img:nth-child(1) {
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }

    .tags {
        margin-bottom: 40px;
    }

    .sinopse {
        display: flex;
        align-items: center;
        padding-top: 64px;
        
    }

    .sinopse > h2 {
        font-size: 36px;
        font-weight: 600;
    }

    .sinopse > ul {
        display: flex;
        align-items: center;
        margin-left: 19px;
    }

    .sinopse > ul > li {
        list-style: none;
        margin-left: 8px;
    }

    .sinopse > ul > li > button {
        background: transparent;
        border: none;
        
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }
`;
