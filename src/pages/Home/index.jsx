import { Container, MoviesList, MainHeader, MovieItem, TagsList } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'

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
            <MovieItem>
              <h3>Interestellar</h3>
              <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária
                em futuro de data desconhecida.
              </p>
              <TagsList>
                <span>ficção científica</span>
                <span>aventura</span>
                <span>espaço</span>
              </TagsList>
            </MovieItem>

            <MovieItem>
              <h3>Interestellar</h3>
              <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária
                em futuro de data desconhecida.
              </p>
              <TagsList>
                <span>ficção científica</span>
                <span>aventura</span>
                <span>espaço</span>
              </TagsList>
            </MovieItem>

            <MovieItem>
              <h3>Interestellar</h3>
              <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária
                em futuro de data desconhecida.
              </p>
              <TagsList>
                <span>ficção científica</span>
                <span>aventura</span>
                <span>espaço</span>
              </TagsList>
            </MovieItem>
          </MoviesList>
        </main>
      </Container>
    </>
  )
}