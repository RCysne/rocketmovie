import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 116px;

    padding: 24px 123px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_DARK};

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_300};

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 24px;
        font-weight: bold;
    }

    > div {
        display: flex;
        align-items: center;
    }

    > div > div {
        margin-right: 8px;
        text-align: right;
    }

    > div > div p {
        font-size: 16px;
        min-width: 100px;
    }

    > div > div a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > div > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`