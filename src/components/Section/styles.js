import styled from 'styled-components';

export const Container = styled.section`
    width: 80%;
    margin: 32px auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    > Section > div > h2 {
        color:${({ theme }) => theme.COLORS.WHITE};
        font-size: 32px;
        font-weight: 400;
    }
`;