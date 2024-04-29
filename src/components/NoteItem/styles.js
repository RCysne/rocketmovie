import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;
    border: none;
    margin-right: 24px;

    > input {
        height: 56px;

        padding: 12px 0 12px 12px;
        color:  ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color:  ${({ theme }) => theme.COLORS.GRAY_300}
        }

    }

    > button {
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`