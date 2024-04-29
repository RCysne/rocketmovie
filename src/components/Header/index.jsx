import { Container } from './styles'
import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo título"/>
            <div>
                <div >
                    <p>Ronaldo Cysne</p>
                    <a href="#">sair</a>
                </div>
                <img src="http://github.com/RCysne.png" alt="" />
                </div>
        </Container>
    )
}