import styled from 'styled-components';

export const Container = styled.button`
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100 };
    
    /* Alinhamento do botão Excluir nota, exemplo 1
    display: flex;
    justify-content: end; */

    font-size: 16px;
    background: none;
    border: none;
`;