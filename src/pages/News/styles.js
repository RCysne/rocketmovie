import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: ${({theme}) => theme.COLORS.BACKGROUND_DARK};

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        overflow-y: auto;
    }
`

export const Form = styled.form`
    display: grid;
    grid-area: content;
    max-width: 80%;
    margin: 38px auto;

    > header {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        margin: 36px 0 16px;
        gap: 24px;
    }

    .inputs {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin: 40px 0;
    }

    a {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        text-decoration: none;
    }

    .tags {
            width: 125%;
            height: 88px;
            padding: 16px;
            margin-top: 24px;
            border-radius: 10px;
            display: flex;
            background: ${({ theme }) => theme.COLORS.BACKGROUND_DARKER};

            border: none;
        }

    .btns {
        display: flex;
        gap: 40px;
    }
    `
