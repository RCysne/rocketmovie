// import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container } from './styles';
import { Section } from '../../components/Section'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

// import { Link } from 'react-router-dom'


export function Home() {
    return (
        <Container>

            <Header to="/profile"></Header>

            <Section>
                <main>
                    <div className='section'>
                        <h2>Meus filmes</h2>
                        <Button title="+ Adicionar filme"/>
                    </div>

                    <Card title="Interestellar" />
                    <Card title="Interestellar" />
                    <Card title="Interestellar" />
                    <Card title="Interestellar" />
                </main>
            </Section>

            
        </Container>
    )
}