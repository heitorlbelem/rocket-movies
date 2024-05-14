import { Container } from './styles'

export function Button({ title, icon: Icon, dark = false, ...rest }) {
  return(
    <Container {...rest} dark={dark}>
      { Icon && <Icon />}
      { title }
    </Container>
  )
}