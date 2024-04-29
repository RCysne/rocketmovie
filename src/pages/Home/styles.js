import styled from 'styled-components';
// import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};

    .section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 32px;

        > button {
            width: 200px;
            height: 48px;

            font-size: 16px;
            }
        }

`;

export const Section = styled.section`
    > main {
        /* overflow-y: auto; */
    }
`

// export const Brand = styled.div`
//     grid-area: brand;
//     background: red;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     border-bottom-width: 1px;
//     border-bottom-style: solid;
//     border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

//     background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

// >h1 {
//     font-size: 24px;
//     color: ${({theme}) => theme.COLORS.PINK};
// }`;


