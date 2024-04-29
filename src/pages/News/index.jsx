import { Header } from '../../components/Header'
import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { FiPlus, FiX } from 'react-icons/fi'


import { Link } from 'react-router-dom';


export function News({title, value, icon,...rest}) {
    return (
        <Container {...rest}>
            <Header />
            
            <main>
                <Form>
                    <header>
                        <Link to="/" >voltar</Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div className='inputs'>
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>
                    
                    <Textarea placeholder="Observações"/>

                    <Section title='Marcadores'>
                        <div className='tags'>
                            <NoteItem value="react"  icon={<FiX />}/> 
                            <NoteItem value="Novo marcador"  icon={<FiPlus/>} />
                        </div>
                        
                    </Section>

                    <div className='btns'>
                        <Button className="button-delete" title="Excluir filme"/>
                        <Button className="button-add" title="Salvar alterações" />
                    </div>

                </Form>
            </main>
            
        </Container>
    )
}