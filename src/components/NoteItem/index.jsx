import { Container } from './styles'

export function NoteItem({value, icon, ...rest}) {
    return (
        <Container {...rest}>
            <input
                type="text"
                value={value}
                readOnly
                />

            <button
                type='button'
                >
                {icon}
            </button>
        </Container>
    )
}