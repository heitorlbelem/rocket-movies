import { Container } from './styles'

export function TextButton({ title, icon: Icon, ...rest }) {
  return(
    <Container>
      { Icon && <Icon size={20} /> }
      { title }
    </Container>
  )
}