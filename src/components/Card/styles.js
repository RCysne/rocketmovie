import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 220px;

    margin: 0 auto 24px;
    padding: 32px;

    background: rgba(255, 133, 155, 5%);
    border-radius: 16px;

    > h2 {
        font-size: 24px;
        margin-bottom: 8px;
    }

    > ul {
        display: flex;
        gap: 3px;
        margin-bottom: 16px;
    }

    > ul > li > button {
        background: transparent;
        border: none;
    }

    > ul > li {
        list-style: none;
        background: transparent;
    }

    > p {
        overflow: hidden; /* remove o estouro do elemento */
        text-overflow: ellipsis; /* adiciona “...” no final */
        display: -webkit-box;
        -webkit-line-clamp: 2; /* quantidade de linhas */
        -webkit-box-orient: vertical; /* conteúdo será apresentado verticalmente */
        margin-bottom: 24px;
}

`