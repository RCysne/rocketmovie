import { Container } from './styles';

export function Button(props) {
console.log(props)

    return (
        <Container
            type='button'>
            {props.title}
        </Container>
    )
}