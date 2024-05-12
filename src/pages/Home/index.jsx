import { Container, MoviesList, MainHeader } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'
import { MovieItem } from '../../components/MovieItem'

export function Home() {
  return(
    <>
      <Header />
      <Container>
        <MainHeader>
          <h2>Meus filmes</h2>
          <Button title="Adicionar" icon={FiPlus}/>
        </MainHeader>
        <main>
          <MoviesList>
            <MovieItem
              title="Interestellar"
              description="Descrição do filme"
              tags={[{ id: 1, name: 'ação' }, {id: 2, name: 'espaço' }]}
            />
            <MovieItem
              title="Homem de Ferro"
              description="Descrição do filme homem de ferro"
              tags={[{ id: 3, name: 'aventura' }, {id: 4, name: 'heroi' }]}
            />
            <MovieItem
              title="Capitão América"
              description="Descrição do filme capitão américa"
              tags={[{ id: 5, name: 'aventura' }, {id: 6, name: 'heroi' }]}
            />
          </MoviesList>
        </main>
      </Container>
    </>
  )
}