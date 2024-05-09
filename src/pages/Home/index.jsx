import { Container, ContentHeader } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  return(
    <>
      <Header />
      <Container>
        <ContentHeader>
          <h1>Meus filmes</h1>
          <Button title="Adicionar filme" icon={FiPlus} />
        </ContentHeader>
      </Container>
    </>
  )
}