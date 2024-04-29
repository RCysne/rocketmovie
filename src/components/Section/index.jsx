import { Container } from './styles';

// Poderia ter o props como parâmetro, e ser retirado o props.title e props.children, mas foi feita uma desestruturação do props.

// eslint-disable-next-line react/prop-types
export function Section({ title, children }) {
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}